import React from 'react';
import atomize from '@quarkly/atomize';
const Parent = atomize.div();
const Effect = atomize.a({
	effects: {
		hover: ':hover',
		focus: ':focus',
		active: ':active',
		visited: ':visited'
	}
});
const PositionChild = atomize.div({
	effects: {
		firstChild: ':first-child',
		lastChild: ':last-child',
		onlyChild: ':only-child'
	}
});
const PositionType = atomize.span({
	effects: {
		firstOfType: ':first-of-type',
		lastOfType: ':last-of-type',
		onlyOfType: ':only-of-type'
	}
});
const Pseudo = atomize.div({
	effects: {
		before: ':before',
		after: ':after',
		firstLine: '::first-line',
		firstLetter: '::first-letter',
		selection: '::selection',
		empty: ':empty'
	}
});
const Form = atomize.form();
const Input = atomize.input({
	effects: {
		valid: ':valid',
		invalid: ':invalid',
		required: ':required',
		enabled: ':enabled',
		disabled: ':disabled',
		webkitPlaceholder: '::-webkit-input-placeholder',
		mozPlaceholder: '::-moz-placeholder',
		msPlaceholder: '::-ms-input-placeholder',
		qPlaceholder: '::-input-placeholder',
		wPlaceholder: '::placeholder'
	}
});

const Component = props => <Parent {...props}>
	    
	<PositionChild firstChild-color="blue">
		First child
	</PositionChild>
	    
	<PositionType firstOfType-color="violet">
		First of type
	</PositionType>
	    
	<Parent>
		      
		<PositionChild onlyChild-color="hotpink">
			Only child
		</PositionChild>
		    
	</Parent>
	    
	<Parent>
		      
		<PositionType onlyOfType-color="hotpink">
			Only of type
		</PositionType>
		<br />
		<br />
		      
		<Pseudo empty-background-color="mistyrose" width="5em" height="1em" />
		    
	</Parent>
	    
	<br />
	    
	<Pseudo firstLine-color="lightcoral" firstLetter-color="red">
		First line and letter
	</Pseudo>
	    
	<Pseudo before-color="yellowgreen" before-content="'[active] '">
		Before content
	</Pseudo>
	    
	<Pseudo after-color="yellowgreen" after-content="' [active]'">
		After content
	</Pseudo>
	    
	<Pseudo selection-background-color="palegreen" color="green">
		Selection
	</Pseudo>
	    
	<br />
	    
	<Input type="email" valid-color="blue" invalid-color="red" value="valid@email.my" />
	<br />
	    
	<Input type="email" valid-color="blue" invalid-color="red" value="invalid email" />
	<br />
	    
	<Input type="email" required={true} required-background-color="lightblue" value="" />
	<br />
	    
	<Input
		type="text"
		webkitPlaceholder-color="lightskyblue"
		mozPlaceholder-color="lightskyblue"
		msPlaceholder-color="lightskyblue"
		placeholder="Placeholder"
	/>
	<br />
	    
	<Input type="text" qPlaceholder-color="red" placeholder="Placeholder" />
	<br />
	    
	<Input type="text" wPlaceholder-color="green" placeholder="Placeholder" />
	<br />
	    
	<Input type="text" disabled={false} enabled-color="sienna" value="Enabled Input" />
	<br />
	    
	<Input type="text" disabled={true} disabled-color="sienna" value="Disabled Input" />
	<br />
	    
	<br />
	    
	<Effect
		href=""
		hover-color="yellow"
		focus-color="orange"
		active-color="red"
		visited-color="darkblue"
		color="blue"
	>
		      Effect
    
	</Effect>
	    
	<br />
	    
	<br />
	    
	<PositionType lastOfType-color="violet">
		Last of type
	</PositionType>
	    
	<PositionChild lastChild-color="blue">
		Last child
	</PositionChild>
	  
</Parent>;

export default Component;