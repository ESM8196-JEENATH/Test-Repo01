// create incremental numbers starting from 1 on user button click
using System;;
using System.Web.UI;
using System.Web.UI.WebControls;
public partial class HelloWorld : Page
{
    private int counter = 0;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            ViewState["Counter"] = counter;
        }
        else
        {
            counter = (int)ViewState["Counter"];
        }
    }

    protected void btnIncrement_Click(object sender, EventArgs e)
    {
        counter++;
        ViewState["Counter"] = counter;
        lblCounter.Text = "Current Number: " + counter.ToString();
    }
}