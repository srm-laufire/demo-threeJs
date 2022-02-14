/* eslint-disable no-magic-numbers */
import React from 'react';
import { Text } from '@react-three/drei';

const AlignmentExample = () =>
	<Text
		scale={ [10, 10, 10] }
		color="red"
		anchorX="center"
		anchorY="bottom"
	>
		LAUFIRE
	</Text>
		;

export default AlignmentExample;
