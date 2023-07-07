# Requested dog breed

<div class="step-text">
<h3 id="description">Description</h3>
<p>Now, we will get the breed name from the user and show a picture of that breed instead of a random breed.</p>
<p>Look at the endpoints in the API documentation again and notice the one where we can enter different breed names and get a picture.</p>
<p>Add <code class="java">input</code> with the ID of <code class="java">input-breed</code> and the placeholder of <code class="java">Enter a breed</code>. Optionally, add a <code class="java">label</code> too, but the tests won't check it.</p>
<p>Also, add the <code class="java">button</code> with the id of <code class="java">button-show-breed</code> and the text <code class="java">Show Breed</code>.</p>
<p>The functionality part should be similar to the previous stage, except for a few additions:</p>
<ul>
<li>This time you will get the breed name from the input and use that to get a response. Make sure to handle both upper- or lower-cased inputs;</li>
<li>Make sure to have at most one item inside the <code class="java">content</code> div;</li>
<li>Another case to handle is when users enter an unknown input, show a paragraph that says <code class="java">Breed not found!</code> instead of an image.</li>
</ul>
<p>You can use the IDs we've provided to select the elements.</p>
<h3 id="objectives">Objectives</h3>
<p>Your page should:</p>
<ul>
<li>Contain <code class="java">input</code> with the ID of <code class="java">input-breed</code> and the placeholder <code class="java">Enter a breed</code>;</li>
<li>Contain a <code class="java">button</code> with the ID of <code class="java">button-show-breed</code> and the text <code class="java">Show Breed</code>;</li>
<li>Use the <a href="https://dog.ceo/dog-api/documentation" rel="noopener noreferrer nofollow" target="_blank">DOG API</a>;</li>
<li>Display the input breed's image from the API;</li>
<li>Handle an unknown input and show a paragraph with the text <code class="java">Breed not found!</code></li>
</ul>
<h3 id="examples">Examples</h3>
<p><strong>Example 1:</strong> <em>Enter a breed name and click the button</em></p>
<p><img alt="Dog Glossary: Enter a breed name and click the button" height="550" name="eg2-dog.png" src="https://ucarecdn.com/2abc2571-9501-4b7c-ad4c-0b81233e21fb/" width="550"/></p>
<p><strong>Example 2</strong>:<em> after entering an unknown breed name and clicking the button</em></p>
<p><img alt="Dog Glossary: After entering an unknown breed name and clicking the button" height="550" name="eg3-dog.png" src="https://ucarecdn.com/8742c573-33c5-4b18-b918-6b03b93e4bea/" width="550"/></p>
</div>
