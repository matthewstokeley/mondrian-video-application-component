Project Takeaways


Proposed categories for the ITIL design service phase - related to development practices. 

- Functional composition and object mutation
- Low level dom scripting
- Application component development
- Interactive graphics
- Web api integration
- Interactive components
- Server-side scripting
- Server-side services - rest api’s, rpc’s, and other web services
- Node development environment utilities

---



---

**Good to knows**
- nice to have's versus expected deliverables?

**Radar**
- Knuth's premature optimization / over-optimization strongly influenced

**Takeaways**
- Document-driven development approved
- Following ITIL's strategy -> design -> transition services decreases development time by separating concerns

Devops and QA aren't development concerns
	Can be:
	- Automated
	- Isolated
	- Integrated

	Examples:
	- Client-side qa
		- cross-browser
		- accessibility
		- regression testing
	- Development-side qa
		- code style / machine formatting
		- code quality / unit testing
 		- documentation
 	- Development environments

- What is efficiency, performance, expectations and to who?

	Who?
	- Stakeholders
	- Project Team
	- Developmers

	What?
		quote from the recent John Maeda 
		- Speed feels like simplicity 
		- Marissa Mayer / Addy Osmani

		Understanding the micro-frontend architectural paradigm

		- Microservices Automated Testing Book
			*replace microservice with micro-front-end for a comparable architectural overview*
			- Instead of distributed, decoupled microservices, CSI or ESI allows for distributed, decoupled micro-frontends (self contained html documents - web components, polymer, react/jsx-style components)
			- multiple developers
			- local scoping - no conflicts between developers / namespace space collisions
		- containerized approach would be best

	- Complicated systems end up with a longer time-to-market

	- Components aren't modular, worksflows are
