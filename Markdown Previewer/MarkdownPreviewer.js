const initialMarkdown = `
### Headers
  
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### List

- list item one
- list item two
- list item three

### Links

[FreeCodeCamp](https://www.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Enginee")

### Text Decorations

*italic*

**bold**

***bold and italic***

### Images

![alt text](https://i.pinimg.com/236x/72/bc/09/72bc091246361583fba7a93a31f898b9.jpg 'Cute Gold Retriever')

### Blockquote

> "Arise, Awake and Stop not until the goal is reached."
> -- Swami Vivekananda

> "A winner is a dreamer who never gives up."
> -- Nelson Mandela

### Code Block

\`npm install create-react-app -g\`

\`\`\`
function myFunction(p1, p2) {
    return p1 * p2; 
}

const name = 'Drake'
const age = 32
const number = Math.random() * 10
\`\`\`
`
var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

// breaks stands for the new line between the elements. If it is false the elements will be in the same line
marked.setOptions({
  renderer,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      markdown: initialMarkdown
    }
  }
  
  handleChange = e => this.setState({ markdown: e.target.value });
  
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <h3 id='edit-tab'><i class="fas fa-code"></i> Edit</h3>
        <h3 id='preview-tab'><i class="far fa-eye"></i> Preview</h3>
        <div className='container'>
          <div className='left'> 
            <textarea id='editor' value={this.state.markdown} onChange={this.handleChange}/>
          </div>
          <div className='right'>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
          </div>
        </div>
        <footer className='text-center'>2023 Coded by danut nanu</footer>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));