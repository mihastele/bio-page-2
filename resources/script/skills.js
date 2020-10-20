items = [{
    name: "Java",
    percentage: 90,
    colorCSS: "bg-success" // deprecated
},
{
    name: "HTML",
    percentage: 90
},
{
    name: "Javascript",
    percentage: 90
},
{
    name: "Python",
    percentage: 88
},
{
    name: "Git",
    percentage: 88
},
{
    name: "CSS",
    percentage: 85
},
{
    name: "Bash",
    percentage: 80
},
{
    name: "SQL",
    percentage: 80
},
{
    name: "Docker",
    percentage: 80
},
{
    name: "Typescript",
    percentage: 75
},
{
    name: "C#",
    percentage: 75
},
{
    name: "C",
    percentage: 75
},
{
    name: "MySQL",
    percentage: 70
},
{
    name: "NodeJS",
    percentage: 70
},
{
    name: "PostgreSQL",
    percentage: 70
},
{
    name: "Subversion",
    percentage: 70
},
{
    name: "C++",
    percentage: 65
},
{
    name: "MongoDB",
    percentage: 65
},
{
    name: "PHP",
    percentage: 65
},
{
    name: "Ruby",
    percentage: 65
},
{
    name: "Cucumber",
    percentage: 63
},
{
    name: "Spring",
    percentage: 60
},
{
    name: "Oracle",
    percentage: 55
},
{
    name: "Kubernetes",
    percentage: 45
},
{
    name: "Vue",
    percentage: 35
},
{
    name: "Openshift",
    percentage: 28
},
{
    name: "React",
    percentage: 24
},
{
    name: "Angular",
    percentage: 24
},
{
    name: "ELK",
    percentage: 10
}
];


function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

// items = sortByKey(items, "percentage");


// colorsByLevel = ["bg-danger", "bg-warning", "bg-info", "bg-success"]

// colorsByLevel = ["bg-info", "bg-info", "bg-success", "bg-success"]

items.forEach(item => {
    let levelString;
    if (item.percentage < 50) {
        levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                    style="width: ${item.percentage}%;height: 100%; background-color: #00a8ff"></div>
            </div>
        </div>
        </div>`
    } else {

        levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar-animated bg-success" role="progressbar"
                    style="width: ${item.percentage}%; height: 100%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
        </div>`;
    }
    $("#skillcont").append(levelString);

});


/*
items.forEach(item => {
    let levelString, color;
    if (item.percentage < 50) {
        if (item.percentage < 25) {
            color = colorsByLevel[0]
        } else {
            color = colorsByLevel[1]
        }
        levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar progress-bar-striped ${color} progress-bar-animated"
                    role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                    style="width: ${item.percentage}%;height: 100%;"></div>
            </div>
        </div>
        </div>`
    } else {
        if (item.percentage < 70) {
            color = colorsByLevel[2];
            levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar progress-bar-striped ${color} progress-bar-animated"
                    role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                    style="width: ${item.percentage}%;height: 100%;"></div>
            </div>
        </div>
        </div>`;
        } else if (item.percentage < 80) {
            color = colorsByLevel[2];
            levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar ${color}" role="progressbar"
                    style="width: ${item.percentage}%; height: 100%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
        </div>`;
        } else {
            color = colorsByLevel[3];
            levelString = `<div class="row">
        <div class="col-xl-1">
            <p>${item.name}</p>
        </div>
        <div class="col-11">
            <div class="progress">
                <div class="progress-bar ${color}" role="progressbar"
                    style="width: ${item.percentage}%; height: 100%;" aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
        </div>`;
        }

    }
    $("#skillcont").append(levelString);
})*/


/*
String highLevelStr = `<div class="row">
<div class="col-2">
    <p>${name}</p>
</div>
<div class="col-10">
    <div class="progress">
        <div class="progress-bar ${colorCSS}" role="progressbar"
            style="width: ${percentage}%; height: 100%;" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100"></div>
    </div>
</div>
</div>`;

String lowLevelStr = `<div class="row">
<div class="col-2">
    <p>Test</p>
</div>
<div class="col-10">
    <div class="progress">
        <div class="progress-bar progress-bar-striped ${colorCSS} progress-bar-animated"
            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
            style="width: 75%;height: 100%;"></div>
    </div>
</div>
</div>`;  */