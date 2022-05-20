


import React, { useState } from "react";
import "../css/Blog.css";

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 390) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Blog = () => {
return (
	<div className="container">
       <div className="contextra">
           <h1>Blogs Hub</h1>
       </div>
       
	

    <h2 className="conth2">
        <h3 className="conth3">SRM hub Launches</h3>
		<ReadMore className="contreadmore">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, impedit totam. Laudantium consectetur tempore sapiente reprehenderit reiciendis nobis dolore debitis quibusdam sed voluptatibus cumque eligendi ut nisi possimus, iure, harum consequuntur omnis! Ducimus in quasi doloremque, sit laboriosam, nostrum accusamus molestias suscipit soluta ut excepturi at corrupti fugiat provident temporibus consectetur debitis ratione mollitia. Sequi ex, labore dicta quam illo porro deserunt voluptate adipisci eum accusantium vel itaque, quibusdam deleniti quis officia ullam quia ipsa harum doloribus blanditiis unde, explicabo dolor neque? Eum laudantium unde ratione, deserunt ab qui! Repellendus maxime eaque natus debitis quisquam mollitia minima iusto, officia expedita voluptatem ipsum rerum quis alias. Dolorem iusto nemo consequatur, at maiores labore dolorum odit alias in quisquam eaque expedita. Illo, asperiores dolorem reprehenderit suscipit, amet aspernatur eligendi ducimus voluptas impedit voluptate beatae itaque assumenda doloremque commodi. Maxime velit aperiam mollitia nulla. Omnis numquam, minus quam tenetur beatae exercitationem tempore quis.
		</ReadMore>
	</h2>

    <h2 className="conth2">
        <h3 className="conth3">Holidays Announced</h3>
		<ReadMore className="contreadmore"> 
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nobis nisi suscipit aliquid totam qui, rerum expedita itaque esse minima nam. In saepe temporibus officia non quibusdam, ipsam autem amet vitae voluptates tempore molestias ab maxime sit quia debitis dicta tenetur fugit tempora. Eos excepturi unde neque doloribus ullam? Alias quae maiores similique ex natus recusandae velit inventore at vitae nihil doloribus non officia eius dignissimos voluptatem sapiente, asperiores eaque consectetur praesentium, commodi voluptate explicabo libero minima reiciendis. Sunt fuga consequatur quibusdam a, dolore atque repellat explicabo sapiente odit modi. Excepturi dicta dolores eius accusantium possimus, quaerat sequi quas ullam.
		</ReadMore>
	</h2>

    <h2 className="conth2">
        <h3 className="conth3">Holidays Announced</h3>
		<ReadMore className="contreadmore">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nobis nisi suscipit aliquid totam qui, rerum expedita itaque esse minima nam. In saepe temporibus officia non quibusdam, ipsam autem amet vitae voluptates tempore molestias ab maxime sit quia debitis dicta tenetur fugit tempora. Eos excepturi unde neque doloribus ullam? Alias quae maiores similique ex natus recusandae velit inventore at vitae nihil doloribus non officia eius dignissimos voluptatem sapiente, asperiores eaque consectetur praesentium, commodi voluptate explicabo libero minima reiciendis. Sunt fuga consequatur quibusdam a, dolore atque repellat explicabo sapiente odit modi. Excepturi dicta dolores eius accusantium possimus, quaerat sequi quas ullam.
		</ReadMore>
	</h2>


    <h2 className="conth2">
        <h3 className="conth3">SRM hub Launches</h3>
		<ReadMore className="contreadmore">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nobis nisi suscipit aliquid totam qui, rerum expedita itaque esse minima nam. In saepe temporibus officia non quibusdam, ipsam autem amet vitae voluptates tempore molestias ab maxime sit quia debitis dicta tenetur fugit tempora. Eos excepturi unde neque doloribus ullam? Alias quae maiores similique ex natus recusandae velit inventore at vitae nihil doloribus non officia eius dignissimos voluptatem sapiente, asperiores eaque consectetur praesentium, commodi voluptate explicabo libero minima reiciendis. Sunt fuga consequatur quibusdam a, dolore atque repellat explicabo sapiente odit modi. Excepturi dicta dolores eius accusantium possimus, quaerat sequi quas ullam.
		</ReadMore>
	</h2>

	</div>
);
};

export default Blog;
