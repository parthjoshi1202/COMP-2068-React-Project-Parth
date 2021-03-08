import React from 'react';

const AboutDescription=() => {

    return (
        <>
        <h1>How to use the Application?</h1>

        <article>
        
        <p>The Vedas are a large body of religious texts, dates back to 2nd millennium BCE, originating in ancient India. Composed in Vedic Sanskrit language, the texts constitute the oldest layer of Sanskrit literature and the oldest scriptures of Hinduism which are still in use for usage in various aspects of life.</p>

        <p>They comprise the four Vedas (Rig, Saam, Yajur, Atharva). Even though the text of these books is available in digital form, it is difficult to programmatically use the text because it is usually in the form of scanned pages. These APIs make available the text contained in vedic literature in a format that can be used programmatically.</p>

        <p>This Application uses Vedic Society API by Anandita Basu which consists of descriptions of all the nouns (except proper nouns) mentioned in vedic literature.Categories include the flora, fauna, geography, food, relationships, and objects. The default response format is JSON. The data is displayed using API Call from a given endpoint and has 4 parts:</p>

        </article>


        <article>

        <ol>Word: The noun, in Sanskrit, transliterated into the roman script, for example, agnishala</ol>
        <ol>Nagari: The noun, in the Devanagari script (Sanskrit), for example, आल</ol>
        <ol>Description: The description of the noun, for example, boa constrictor, mentioned in the list of victims at the ashwamedh (horse sacrifice)</ol>
        <ol>Category: The category the noun belongs to, for example, disease.</ol>

        </article>


        <article>

        <p>You can search for a word/description/category by entering inputs on the "search" field and the filtered data will be displayed, for exmaple: you can enter "brother" and it will show all data (word/description/category) which contains "brother" in it. Usual Data can be shown if we keep the search field empty. Searching based on "nagari" field is not supported.</p>

        <p>The second functionality is isolate based on a certain category. After clicking the "Isolate data based on "Measurement" Category", the table will only show data which has category of measurement (number, distance, time, weight). Reload the Page to reset the Data. Source: <a href="https://public-apis.io/vedic-society-api">https://public-apis.io/vedic-society-api</a>,  <a href="https://aninditabasu.github.io/indica/html/vs.html">https://aninditabasu.github.io/indica/html/vs.html</a>. 
        
        Endpoint: <a href="https://api-vs.herokuapp.com/vs/v1/resources/all">https://api-vs.herokuapp.com/vs/v1/resoucres/all</a>
        </p>

        <p>See Data Page for the data loading and interact with it !</p>

        </article>
        </>
    );
}

export default AboutDescription;