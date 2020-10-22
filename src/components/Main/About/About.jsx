import React from "react";
import classes from './About.module.css';
import H1 from "../../UI/Titles/H1/H1";
import Image from "../../UI/Image/Image";

const About = () => {
	return (
		<div className={classes.about}>

			<H1 styles={{marginTop: '0', display: 'block'}}>Немного обо мне</H1>

			<div className={classes.topComposition}>
				<div className={classes.leftBlock}>
					<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dignissimos dolore, ex facere harum illo ipsa iure molestiae necessitatibus officia optio perspiciatis placeat sed sequi sit temporibus unde veritatis!</span><span>Adipisci alias cum dignissimos illo nihil obcaecati recusandae tempora vitae. Exercitationem facere numquam obcaecati odit perferendis, ratione saepe sapiente sit vitae voluptatum? Ad excepturi odio officia pariatur repudiandae tenetur unde.</span><span>Ad animi aspernatur aut dicta, dolorum excepturi illo iste libero magnam magni non porro quisquam recusandae reprehenderit repudiandae sunt suscipit veritatis! Assumenda consequatur ipsam nostrum numquam provident qui velit, voluptatum?</span><span>Aliquid autem consectetur consequatur corporis cumque dicta earum error eum excepturi explicabo, fuga hic in labore magni modi molestiae mollitia nobis nostrum perferendis perspiciatis provident repellendus similique tempore temporibus ut.</span><span>Accusamus aliquid amet architecto at consequatur cum doloremque ea eum eveniet id impedit ipsa, laudantium magnam maiores molestiae nihil quam repellendus sint tenetur voluptatem! Ab architecto cupiditate dolorum quibusdam veritatis?</span><span>Ad aspernatur consequuntur corporis dignissimos dolorem et fugit harum magnam maxime nisi omnis, optio quas quasi quos reiciendis unde ut velit, vero? Accusamus at expedita, mollitia obcaecati recusandae sunt tempora?</span><span>Amet blanditiis consequatur distinctio dolor, earum enim error et hic in nam nulla quis repudiandae sint suscipit ullam unde velit. Eligendi eveniet nam nulla odit pariatur sed ut velit vitae!</span><span>Assumenda consequuntur corporis debitis dicta distinctio ducimus explicabo, hic id maiores mollitia non omnis pariatur ratione recusandae suscipit. Asperiores dolore dolores eum hic id minima perferendis quam sint veritatis voluptate.</span><span>Blanditiis ducimus nam sunt velit. Accusamus adipisci amet asperiores autem culpa dolorem ducimus ea eius, et hic ipsum laboriosam magnam magni molestias nam numquam, ratione similique sint temporibus vero voluptates.</span><span>Accusantium dignissimos ducimus laborum magni numquam! Dolor explicabo odio praesentium quasi reprehenderit saepe sunt! Alias cupiditate dolorum labore magni nihil officiis perspiciatis praesentium quisquam recusandae rerum saepe, tempore voluptate. Doloremque!</span> </p>
				</div>
				<div className={classes.rightBlock}>
					<Image
						width={600}
						height={600}
					/>
				</div>
			</div>

		</div>
	)
};

export default About;