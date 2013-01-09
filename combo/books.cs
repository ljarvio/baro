using System;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Data;
using System.Data.Odbc;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
 
/// <summary>
/// Web services to query the book database. All methods return JSON data.
/// </summary>
[WebService(Description = "Web services to query the book database.", Namespace = "http://www.williamsportwebdeveloper.com/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[ScriptService]
public class BookServices : System.Web.Services.WebService {
 
    public BookServices () {
 
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
 
    [WebMethod(Description = "Gets the books matching part of a title.")]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string GetBooksByTitle(string strTitle) {
        OdbcConnection objConnection = new OdbcConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Books"].ConnectionString);
        OdbcCommand objCommand = new OdbcCommand("SELECT * FROM reading WHERE Title LIKE '%" + strTitle + "%' ORDER BY BookNum;", objConnection);
        DataSet objDataSet = new DataSet();
        OdbcDataAdapter objDataAdapter = new OdbcDataAdapter(objCommand);
        objDataAdapter.Fill(objDataSet, "reading");
        objConnection.Close();
 
        // Create a multidimensional jagged array
        string[][] JaggedArray = new string[objDataSet.Tables[0].Rows.Count][];
        int i = 0;
        foreach (DataRow rs in objDataSet.Tables[0].Rows)
        {
            JaggedArray[i] = new string[] { rs["BookNum"].ToString(), rs["Title"].ToString(), rs["Author"].ToString() };
            i = i + 1;
        }
 
        // Return JSON data
        JavaScriptSerializer js = new JavaScriptSerializer();
        string strJSON = js.Serialize(JaggedArray);
        return strJSON;
    }
 
    [WebMethod(Description = "Gets the books matching part of an author's name.")]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public string GetBooksByAuthor(string strAuthor)
    {
        OdbcConnection objConnection = new OdbcConnection(System.Configuration.ConfigurationManager.ConnectionStrings["Books"].ConnectionString);
        OdbcCommand objCommand = new OdbcCommand("SELECT * FROM reading WHERE Author LIKE '%" + strAuthor + "%' ORDER BY BookNum;", objConnection);
        DataSet objDataSet = new DataSet();
        OdbcDataAdapter objDataAdapter = new OdbcDataAdapter(objCommand);
        objDataAdapter.Fill(objDataSet, "reading");
        objConnection.Close();
 
        // Create a multidimensional jagged array
        string[][] JaggedArray = new string[objDataSet.Tables[0].Rows.Count][];
        int i = 0;
        foreach (DataRow rs in objDataSet.Tables[0].Rows)
        {
            JaggedArray[i] = new string[] { rs["BookNum"].ToString(), rs["Title"].ToString(), rs["Author"].ToString() };
            i = i + 1;
        }
 
        // Return JSON data
        JavaScriptSerializer js = new JavaScriptSerializer();
        string strJSON = js.Serialize(JaggedArray);
        return strJSON;
    }
    
}