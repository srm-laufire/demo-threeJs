/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import React from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ children, ...props }) =>
	<Html
		transform={ true }
		occlude={ true }
		onOcclude={ undefined }
		style={ { transition: 'all 0.2s', opacity: 1, transform: 1 } }
		{ ...props }
	>
		{children}
	</Html>
  ;

const HtmlMarker = (props) => {
	const { nodes, materials } = useGLTF(`${ process.env.PUBLIC_URL }/earth.gltf`);

	return (
		<group rotation={ [-Math.PI / 2, 0, Math.PI] } { ...props } dispose={ null }>
			<mesh geometry={ nodes['URF-Height_Lampd_Ice_0'].geometry } material={ materials.Lampd_Ice }/>
			<mesh geometry={ nodes['URF-Height_watr_0'].geometry } material={ materials.watr } material-roughness={ 0 }/>
			<mesh geometry={ nodes['URF-Height_Lampd_0'].geometry } material={ materials.Lampd } material-color="lightgreen">
				<Marker rotation={ [0, Math.PI / 2, 0] } position={ [0, 1.3, 0] }>
					<FaMapMarkerAlt style={ { color: 'orange' } }/>
				</Marker>
				<group position={ [0, 0, 1.3] } rotation={ [0, 0, Math.PI] }>
					<Marker rotation={ [0, Math.PI / 2, Math.PI / 2] }>
						<div style={ { position: 'absolute', fontSize: 10, letterSpacing: -0.5, left: 17.5 } }>north</div>
						<FaMapMarkerAlt style={ { color: 'indianred' } }/>
					</Marker>
				</group>
			</mesh>
		</group>
	);
};

export default HtmlMarker;
