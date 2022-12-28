const categoriesListLength = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesListLength}`);



const categoriesArr = document.querySelectorAll('.item');
const categoriesLiArr = [];
for (const elem of categoriesArr) {
    categoriesLiArr.push(elem.lastElementChild.children.length);
};

const categoryItemHeadingArr = document.querySelectorAll('h2');
const categoryHeadingTextArr = [];
for (const heading of categoryItemHeadingArr) {
    categoryHeadingTextArr.push(heading.textContent);
};



for (let i = 0; i < categoriesArr.length; i += 1) {
    console.log(`Category: ${categoryHeadingTextArr[i]}`);
    console.log(`Elements: ${categoriesLiArr[i]}`)
};