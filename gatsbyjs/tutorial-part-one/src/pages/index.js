import React from "react";
import Link from 'gatsby-link';

export default () =>
                    (<div><div style={{ color: `blue` }}>Hi there!</div>
                    <div>its working</div>
                    <img src="https://source.unsplash.com/random/400x200" alt="" />
                    <Link to="/page-2/">Page 2</Link>
                    <Link to="/page-3/">Page 3</Link>
                    <Link to="/counter/">Counter</Link>
                    <button class="primary-button">Primary Button</button>
                    </div>)
