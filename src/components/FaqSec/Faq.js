import React from 'react'

function Faq ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				<h3>{faq.question}</h3>
			</div>
			<div className="faq-answer">
				<h3>{faq.answer}</h3>
			</div>
		</div>
	)
}

export default Faq;