const toOdd = $(".sectionContainer section:nth-child(odd)");
const toEven = $(".sectionContainer section:nth-child(even)");
/*const toOdd = $(".sectionContainer section:nth-child(odd) .contentContainer");
const toEven = $(".sectionContainer section:nth-child(even) .contentContainer");*/


toOdd.addClass("odd");
toEven.addClass("even");
$(".sectionContainer section:first-child() .contentContainer").css("margin-top", "30px");
$(".sectionContainer section:last-child() .contentContainer").css("margin-bottom", "0");



/*

var liPairs = [["Bachelor CS Degree", "2015-2018", "Faculty of Computer and Information Science - University of Ljubljana"]]
var struct = `<li>
<div>
    <p style="margin: 0; padding: 0; font-weight: 800; text-align: center;">Bachelor CS Degree</p>
    <p style="margin: 0; padding: 0; text-align: center;"><span style="display: inline-block;margin-right: 8px;">(2015-2018)</span>
        <span style="display: inline-block;">Faculty of Computer and Information Science - University of Ljubljana</span></p>

</div>
</li>`

*/

// [[GRADUATION_TITLE, YEAR_FROM-YEAR_TO, SCHOOL/UNIVERSITY], ...]
// [[JOB_TITLE, YEAR_FROM-YEAR_TO, COMPANY], ...]
var liPairsEducation = [["Bachelor CS Degree", "2015-2018", "Faculty of Computer and Information Science - University of Ljubljana"],
["Electrical Engineer", "2011-2015", "Vegova – Upper Secondary School of Electrical and Computer Engineering and Technical Gymnasium Ljubljana"]]

liPairsEducation.forEach(liPair => {
    var struct = `<li style="margin-top: 20px">
<div>
    <p style="margin: 0; padding: 0; font-weight: 900; text-align: center;">${liPair[0]}</p>
    <p style="margin: 0; padding: 0; text-align: center;"><span style="display: inline-block;margin-right: 8px;">(${liPair[1]})</span>
        <span style="display: inline-block;">${liPair[2]}</span></p>

</div>
</li>`
    $("#education").append(struct);
})


var liPairsWork = [["QA Automation Engineer", "2019-", "Beenius"],
["Software Engineer", "2017-2019", "Beenius"]];

liPairsWork.forEach(liPair => {
    var struct = `<li style="margin-top: 20px">
<div>
    <p style="margin: 0; padding: 0; font-weight: 900; text-align: center;">${liPair[0]}</p>
    <p style="margin: 0; padding: 0; text-align: center;"><span style="display: inline-block;margin-right: 8px;">(${liPair[1]})</span>
        <span style="display: inline-block;">${liPair[2]}</span></p>

</div>
</li>`
    $("#work").append(struct);
})


var liPairsFree = [["Professional website projects (including this profile page)", "2020-"],
["Professional collaboration in projects", "2020-"],
["Home made loudspeaker", "2020"], ["Bladeless fan with 3D printer", "2019"],
["Personal social media application", "2019"],
["Tower defense Android application with LibGDX", "2017"],
["Contribute to open-source in free time", "2017-"]];

liPairsFree.forEach(liPair => {
    var struct = `<li style="margin-top: 20px">
    <div>
        <p style="margin: 0; padding: 0; font-weight: 800; text-align: center;">${liPair[0]}</p>
        <p style="margin: 0; padding: 0; text-align: center;"><span
                style="display: inline-block;margin-right: 8px;">(${liPair[1]})</span></p>

    </div>
</li>`
    $("#freeTime").append(struct);
})
