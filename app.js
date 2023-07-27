/*
The Intersection Observer API allows you to efficiently detect 
when an element enters or exits the viewport or intersects with 
another element. It provides a way to perform actions based on 
the visibility of elements on a web page.
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

/*
1. First, an instance of the IntersectionObserver class is created with a callback function as its parameter. This callback function is executed whenever an intersection change occurs.
2. The callback function receives an array of IntersectionObserverEntry objects as its parameter, which represents the elements being observed and their intersection information.
3. Inside the callback function, a forEach loop is used to iterate over each entry in the entries array.
4. The console.log(entry) statement logs the entry object to the console, providing information about the observed element's intersection with the viewport or another element.
5. The if statement checks if the observed element is currently intersecting with the viewport (entry.isIntersecting). If it is, the 'show' class is added to the element's class list using entry.target.classList.add('show'). This class can be used to apply CSS styles and make the element visible.
6. If the observed element is not intersecting with the viewport, the 'show' class is removed from the element's class list using entry.target.classList.remove('show'). This can be used to hide the element or apply different styles.
*/

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* 
1. The querySelectorAll method is used to select all elements with the class name 'hidden'. These are the elements that will be observed for intersection changes.
2. The forEach method is used to iterate over each selected element (el).
3. The observe method of the IntersectionObserver instance (observer) is called with the current element (el) as the parameter. This adds the element to the set of target elements being watched by the IntersectionObserver.
*/
