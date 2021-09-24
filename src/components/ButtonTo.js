import React from 'react';

function ButtonTo (props) {
    const buttons = {
        headerBox: (<button class="btn btn-info" title="Main Page">Main Page
          </button>),
        workBox: (<button class="btn btn-info" title="My Work">My Work
          </button>),
        strengthBox: (<button class="btn btn-warning" title="My Strengths">My Strengths
          </button>),
        hobbyBox: (<button class="btn btn-info" title="My Hobbies">My Hobbies
          </button>),
        contactBox: (<button class="btn btn-danger" title="Contact Me">Contact
          </button>),
    };
    let button = buttons[props.id];
    return (<button {...button.props} onClick={props.onClick}></button>)
}

export default ButtonTo