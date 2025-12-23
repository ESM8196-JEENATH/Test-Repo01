<!--Create increment count on button click-->
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="helloworld.aspx.cs" Inherits="helloworld" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Hello World Increment</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Button ID="btnIncrement" runat="server" Text="Increment" OnClick="btnIncrement_Click" />
            <br /><br />
            <asp:Label ID="lblCount" runat="server" Text="0"></asp:Label>
        </div>
    </form>
</body>
</html>