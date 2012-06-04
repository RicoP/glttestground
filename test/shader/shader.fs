#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureuv; 
varying vec4 vNormal; 

uniform sampler2D uTexture; 
uniform sampler2D uMask; 
uniform sampler2D uTile; 
 
void main(void) {
	float mask = texture2D(uMask, vTextureuv).x; 
	
	if(mask != 0.0) { 					
		vec2 p = gl_FragCoord.xy / 1000.0; 
		vec3 c = texture2D(uTile, p).xyz; 
		gl_FragColor = vec4(c, 1.0); 
	} 
	else {
		vec3 c = texture2D(uTexture, vTextureuv).xyz; 
		gl_FragColor = vec4(c, 1.0); 
	}
}

