cd /d D:\gams\projects\d3\web\baro\sectoren
set i=%1
dir /B /S index.html > ..\charts%i%.txt
cd /d D:\gams\projects\d3\web\baro\
sed -i "s/\(.\{29\}\)//" charts%i%.txt
sed -i "s/\\/\//g" charts%i%.txt
sed -i "s/$/\"/" charts%i%.txt
sed -i "s/^/\"/" charts%i%.txt
type charts%i%.txt

copy charts%i%.txt links%i%.txt
sed -i "s/^/<a href=/" links%i%.txt
sed -i "s/$/>link<\/a>/" links%i%.txt

del sed*







