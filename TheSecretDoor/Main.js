var n=3;
function Game(){
    $('button').hide();
    $('.jumbotron').show();

    Initialize();
}
function Initialize()
{
    $(document).ready(function(){
        var randDoor=new RandDom();
        var a=randDoor.rand(1, 3);
        $('#theFirstDoor #value').html(a[0]);
        $('#theSecondDoor #value').html(a[1]);
        $('#theThirdDoor #value').html(a[2]);
    })
}

function OpenDoor(id)
{ 
    --n;
    $('#'+id).attr('onclick', "");
    $('#'+id+' img').hide();
    $('#'+id+' div').show();
    
    if($('#'+id+ ' #value').html()==3 && n!=0)
    {
        alert("Thua");
        location.reload();
    }
    if($('#'+id+ ' #value').html()==3 && n==0)
    {
        alert("Chiến thắng");
        location.reload();
    }
}
function RandDom()
{
    this.rand=function(minVal, maxVal){
        var n=maxVal-minVal+1;
        var number=[];
        for(var i=0; i<n;i++)
            number[i]=minVal++;
        var k=n-1;
        while(k+1)
        {
            let j=Math.floor(Math.random()*(n-1));
            number[k]=[number[j], number[j]=number[k--]][0];
        }
        return number;
    };
}
