const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" }
  ];

const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility",
"Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const occupations = [  "gardener", "programmer", "teacher", "gardner"];

const freelancersList = window.document.querySelector('#freelancersList');
const addButton = document.querySelector('#addButton');
const spanCount = document.querySelector('#spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');

addButton.addEventListener('click', function(){
    freelancers.push(generateRandom());
    render();
});

freelancersList.addEventListener('click', (ev)=>{
    if(ev.target.tagName === 'LI'){
    const li = ev.target;
    const ul = li.parentNode;
    const children = Array.from(ul.children);
    console.log(children);
    const idx = children.indexOf(li);
    freelancers.splice(idx, 1);
    render();
    }   
});

function generateRandom(){
    const nameIdx = Math.floor (Math.random()*names.length);
    const name = names[nameIdx];
    const occupationIdx = Math.floor (Math.random()*occupations.length);
    const occupation = occupations[occupationIdx];
    const cost = Math.ceil(Math.random() * 100);
    return{
        name,
        occupation,
        cost
};

};
function render(){
    const lis = freelancers.map((freelancer)=> {
    return `<li>${freelancer.name} is ${freelancer.occupation} 
    and costs ${freelancer.cost}
    </li>`;
    }).join('');
    freelancersList.innerHTML =lis;
    spanCount.innerHTML = freelancers.length;
}

let sum = 0;
freelancers.forEach((freelancer)=> {
    sum = sum + freelancer.cost;
});

const average = sum / freelancers.length;
spanAverageCost.innerHTML = average;


const freelancer = [];
freelancers.push(generateRandom());
freelancers.push(generateRandom());

render();
