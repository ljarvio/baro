SELECT [ssName], [dOrder], [dYear], [dCategory], [dSerieData]
FROM (	SELECT [dSerie],[ssName], [dOrder], [dYear], [dCategory], [dSerieData]
FROM [BarometerAgrarischeSectoren].[dbo].[tblDataLive] as data
INNER JOIN [BarometerAgrarischeSectoren].[dbo].[tblSeries] as sector
ON sector.ssID = data.dSerie) AS d

WHERE [dSerie] = '43'
  
  
  

  

  