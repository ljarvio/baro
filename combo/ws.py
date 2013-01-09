import pyodbc
import json
import numpy
import collections
 
connstr = 'DRIVER={SQL Server};SERVER=leidh048s;DATABASE=BarometerAgrarischeSectoren;'
conn = pyodbc.connect(connstr)
cursor = conn.cursor()

query = open('saldo.sql', 'r').read()
query = query.replace('\t', '').replace('\n', ' ')
 
cursor.execute(query)
 
rows = cursor.fetchall()

rowarray = []
for row in rows:
	row[-1] = float(row[-1])
	t = (row.ssName, row.dCategory, row.dOrder, row.dYear, row.dSerieData)
	rowarray.append(t)

j = json.dumps(rowarray)
j = j.replace('], ', '],\n') 
f = open('dump.json', 'w')
print >> f, j
print "query results are now in file dump.json"
	