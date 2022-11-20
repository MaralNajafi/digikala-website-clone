# About the project

This is a clone of one of the pages of Digikala E-commerce Website using Html5, CSS3 and a little JS.
I am still working on it.  

You can see the preview of my work via this [link](https://htmlpreview.github.io/?https://github.com/MaralNajafi/digikala-powerbank-clone/blob/main/index.html). Make sure to open it in Chrome browser and on a desktop as it’s not responsive yet and some codes may not be compatible with other browsers.


## About the official website

Digikala’s website, from a programming stand point, is a well-developed E-commerce website with a user friendly UI, available on all devices. The official language of the website is Persian.   

You can visit Digikala’s homepage via this [link](https://www.digikala.com/) and the page I decided to clone [here](https://www.digikala.com/search/category-power-bank/). Also, in order to learn more about Digikala, founders, and etc. visit this [link](https://en.wikipedia.org/wiki/Digikala).

## The page I decided to clone

The page that I decided to clone is the "power bank category" which presents all power banks ever submitted on digikala for sale. It was actually suggested to me as **a great practice on front-end web development** by a friend of mine who is actually a senior full-stack web developer!   

At first glance, one might find it easy to develop but once you jump into it you will face so many details and challenges.    

You also might want to **give it a try** specially as a beginner or a junior front-end developer. Here is why:

- It is full of **so many details and challenges** which make you wonder how they did that! So, you eventually start to come up with ideas and dive deeply into its code to find out the solution.  

- When you go through the code you **will find different ways of structuring and categorizing the data** and how html tags can be used in so many various ways that you haven’t ever thought of that.   

- Also, since it’s a heavy project with so many nested "div"s, **you might want to adopt a new approach on the way you style** html tags. And believe me, you’re going to use all css selectors ever existed!   

- If you are struggling with flex-box properties **this project is a good practice to deeply understand the usage of flex**. Specially when it comes to a responsive style.

## Experiences I gained

I may not be able to put all my experiences into words as I’m not a good writer, but here are some main points:   

### Html

One might think of html as the easiest part of a web development! However, when it comes to structuring and organizing heavy data with a special styling and realizing how it affects your further development with other languages such as JavaScript or back-end programming languages, you might want to change your view and actually come to terms with the fact that Html is the determinative foundation of your website!   

You must pick html tags wisely and try to be as efficient as possible. This project actually helps you with how to code efficiently. As long as you care about the functionality of your website not just how it looks!   

### CSS

For a long time, I used to think inline styling is not efficient at all and it’s a mistake. However, when It comes to such projects you will find it inevitable to use inline styling! As you cannot come up with thousands of special class names and sometimes it becomes impossible to select an element using css selectors (as I previously talked about so many nested elements)! Also some stylings are taken care of by React.js (Don’t want to dive deep into it as it’s not the main concern of this subject, but React.js allows you to easily style your elements dynamically, and sometimes it’s inline styling.)   

Still, this does not mean that you should overuse inline styling. I myself tried my best to keep it to a minimum. I mostly used it to style "svg"s and only the property of "fill".   

**So, what is the solution?**

#### The best thing I learned

Have a *reference css file*! I’ve seen so many developers that have a *reset css file* which resets all default styling of the elements. Such as padding, margin, list style and etc. It’s a good idea to have such a file and to link it to your html file before linking any other stylesheets.   

Thanks to the developers of Digikala website and also [@kevin-powell](https://github.com/kevin-powell)’s tips, I decided to go further and create a reference css file which contains some class names with special stylings. Bellow you can see some examples of it:   

```
    <style>
        .d-flex{
            display: flex;
        }
        .flex-center{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .flex-col{
            display: flex;
            flex-direction: column;
        }
        .flex-row{
            display: flex;
            flex-direction: row;
        }
    </style>
```

Now instead of this:  
```
    <style>
    nav{
        display: flex;
        flex-direction: row;
    }
    header{
        display: flex;
        flex-direction: row;
    }
    .main-content{
        display: flex;
        flex-direction: row;
    }
    </style>
```

You can do this:  
```
    <header class="flex-row"></header>
    <nav class="flex-row"></nav>
    <div class="main-container flex-row"></div>  
```


These classes are called **utility classes**

##### Benefits of utility classes

- It saves you a lot of time styling
- Helps you have a cleaner, more readable code
- keeps your code DRY (Don’t Repeat Yourself)
- No need to come up with thousands of special class names specially in heavy projects
- No need to try to select an element using weird long css selectors just for a few general stylings.

### JavaScript

I don’t actually have anything to mention about its JavaScript as I haven’t yet done anything special with it (just switching between different tabs). But I may need to do some other programming later to finish the project.  

### Contribution

Thank you so much for reading all these. I am really trying to improve my skills in front-end web development so **any suggestions, tips and recommendations are welcomed**. So please feel free to contribute and pull a request or contact me via my email address: <marawlnajafi@gmail.com>
