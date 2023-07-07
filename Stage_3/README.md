# Requested sub-breed

<div class="step-text">
<h5 id="description">Description</h5>
<p>So far, we've shown random images and requested images for cute dog breeds on the Internet. Now, let's show sub-breeds of a specific breed.</p>
<p>Similar to the previous stage, when users enter a breed name, show sub-breeds using the API. You can check the documentation to see the endpoint.</p>
<p>Start by adding a new <code class="java">button</code> with the ID <code class="java">button-show-sub-breed</code> and the text <code class="java">Show Sub-Breed</code>.</p>
<p>Use the same <code class="java">input</code> tag from the previous stage to get the user's input.</p>
<p>The functionality part has the same constraints as before, but this time, display the data as an ordered list. Make sure to handle unknown breeds.</p>
<p>If there is no sub-breed for a breed, show a paragraph with the text <code class="java">No sub-breeds found!</code></p>
<p>You can use the IDs we've provided to select the elements.</p>
<h5 id="objectives">Objectives</h5>
<p>Your page should:</p>
<ul>
<li>Contain a <code class="java">button</code> with the id <code class="java">button-show-sub-breed</code> and the text <code class="java">Show Sub-Breed</code>;</li>
<li>Use the <a href="https://dog.ceo/dog-api/documentation" rel="noopener noreferrer nofollow" target="_blank">DOG API</a>;</li>
<li>Display the breed's sub-breeds as a list from the API;</li>
<li>Handle unknown input and show a paragraph with the text <code class="java">Breed not found!</code>;</li>
<li>Handle a case when there are no sub-breeds and show a paragraph with the text <code class="java">No sub-breeds found!</code></li>
</ul>
<h5 id="examples">Examples</h5>
<p><strong>Example 1</strong>: <em>after entering a breed name and clicking the button</em></p>
<p><img alt="dog glossary sub-breed list" height="550" name="eg4-dog.png" src="https://ucarecdn.com/0f17e33c-1b3b-419c-af1e-9f277ca83f2c/" width="550"/></p>
<p><strong>Example 2</strong>: <em>after entering a breed name without a sub-breed and clicking the button</em></p>
<p><img alt="dog glossary empty list" height="550" name="eg5-dog.png" src="https://ucarecdn.com/d9567b86-e3f8-4493-b70f-df09fe765eee/" width="550"/></p>
</div>
