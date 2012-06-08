var t = !0, u = !1;
(function() {
  p || (window.WebGLRenderingContext && (window.WebGLRenderingContext.prototype.getSafeContext = function() {
    function c(o, a) {
      var e, f, h, d, j, g;
      if("string" === typeof a) {
        if("error" === a) {
          g = i
        }else {
          if("warn" === a) {
            g = b
          }else {
            throw Error("can't process the option '" + a + "!");
          }
        }
      }else {
        g = "function" === typeof a ? a : b
      }
      h = [];
      for(e in o) {
        "getSafeContext" !== e && h.push(e)
      }
      j = h.map(function(a) {
        var b;
        b = o[a];
        return"function" === typeof b ? [a, l(o, b, a, g)] : [a]
      });
      d = {isSafeContext:t};
      for(h = 0;h != j.length;h++) {
        f = j[h], e = f[0], (f = f[1]) ? d[e] = f : function(a) {
          Object.defineProperty(d, a, {get:function() {
            return o[a]
          }, set:function(b) {
            o[a] = b
          }, enumerable:t})
        }(e)
      }
      return d
    }
    function l(a, b, e, g) {
      var h = v[e];
      return!h ? (console.warn("couldn't find reference definition for method " + e + "."), function() {
        return b.apply(a, arguments)
      }) : function() {
        var c = f(Array.prototype.slice.call(arguments), h);
        c ? d(Array.prototype.slice.call(arguments), c, e, g) : g("couldn't apply arguments (" + Array.prototype.slice.call(arguments).join(", ") + ") to any of the possible schemas:\n" + h.map(function(a) {
          return"(" + a.B.map(function(a) {
            return a.type
          }).join(", ") + ")"
        }).join("\n,"));
        return b.apply(a, arguments)
      }
    }
    function d(a, b, e, f) {
      var d, g, j, c;
      for(c = 0;c != a.length;c++) {
        if(d = a[c], g = b.B[c].type, j = b.B[c].name, !r[g](d)) {
          f("Argument '" + j + "' in function '" + e + "' was expected to be of type '" + g + "' but instead was called with value: " + d);
          break
        }
      }
    }
    function f(b, d) {
      return d.filter(function(e) {
        if(e.B.length !== b.length) {
          return u
        }
        var d = 0;
        return e.B.every(function(e) {
          return a[e.type](b[d++])
        })
      })[0]
    }
    function i(a) {
      throw Error(a);
    }
    function b(a) {
      console.warn(a)
    }
    function a() {
      var a = Array.prototype.slice.call(arguments).map(function(a) {
        return a.toLowerCase()
      });
      return function(b) {
        var e = s(b);
        return a.some(function(a) {
          return e === a
        })
      }
    }
    function g() {
      return t
    }
    function m(a) {
      if("array" === s(a)) {
        for(var b = 0;b != a.length;b++) {
          if("number" !== typeof a[b]) {
            return u
          }
        }
      }
      return t
    }
    function k(a) {
      return"number" === typeof a && a === ~~a
    }
    function s(a) {
      return{}.toString.call(a).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase()
    }
    var v = {releaseShaderCompiler:[{args:[]}], getContextAttributes:[{args:[]}], isContextLost:[{args:[]}], getSupportedExtensions:[{args:[]}], getExtension:[{args:[{name:"name", type:"DOMString"}]}], activeTexture:[{args:[{name:"texture", type:"GLenum"}]}], attachShader:[{args:[{name:"program", type:"WebGLProgram"}, {name:"shader", type:"WebGLShader"}]}], bindAttribLocation:[{args:[{name:"program", type:"WebGLProgram"}, {name:"index", type:"GLuint"}, {name:"name", type:"DOMString"}]}], bindBuffer:[{args:[{name:"target", 
    type:"GLenum"}, {name:"buffer", type:"WebGLBuffer"}]}], bindFramebuffer:[{args:[{name:"target", type:"GLenum"}, {name:"framebuffer", type:"WebGLFramebuffer"}]}], bindRenderbuffer:[{args:[{name:"target", type:"GLenum"}, {name:"renderbuffer", type:"WebGLRenderbuffer"}]}], bindTexture:[{args:[{name:"target", type:"GLenum"}, {name:"texture", type:"WebGLTexture"}]}], blendColor:[{args:[{name:"red", type:"GLclampf"}, {name:"green", type:"GLclampf"}, {name:"blue", type:"GLclampf"}, {name:"alpha", type:"GLclampf"}]}], 
    blendEquation:[{args:[{name:"mode", type:"GLenum"}]}], blendEquationSeparate:[{args:[{name:"modeRGB", type:"GLenum"}, {name:"modeAlpha", type:"GLenum"}]}], blendFunc:[{args:[{name:"sfactor", type:"GLenum"}, {name:"dfactor", type:"GLenum"}]}], blendFuncSeparate:[{args:[{name:"srcRGB", type:"GLenum"}, {name:"dstRGB", type:"GLenum"}, {name:"srcAlpha", type:"GLenum"}, {name:"dstAlpha", type:"GLenum"}]}], bufferData:[{args:[{name:"target", type:"GLenum"}, {name:"size", type:"GLsizeiptr"}, {name:"usage", 
    type:"GLenum"}]}, {args:[{name:"target", type:"GLenum"}, {name:"data", type:"ArrayBufferView"}, {name:"usage", type:"GLenum"}]}, {args:[{name:"target", type:"GLenum"}, {name:"data", type:"ArrayBuffer"}, {name:"usage", type:"GLenum"}]}], bufferSubData:[{args:[{name:"target", type:"GLenum"}, {name:"offset", type:"GLintptr"}, {name:"data", type:"ArrayBufferView"}]}, {args:[{name:"target", type:"GLenum"}, {name:"offset", type:"GLintptr"}, {name:"data", type:"ArrayBuffer"}]}], checkFramebufferStatus:[{args:[{name:"target", 
    type:"GLenum"}]}], clear:[{args:[{name:"mask", type:"GLbitfield"}]}], clearColor:[{args:[{name:"red", type:"GLclampf"}, {name:"green", type:"GLclampf"}, {name:"blue", type:"GLclampf"}, {name:"alpha", type:"GLclampf"}]}], clearDepth:[{args:[{name:"depth", type:"GLclampf"}]}], clearStencil:[{args:[{name:"s", type:"GLint"}]}], colorMask:[{args:[{name:"red", type:"GLboolean"}, {name:"green", type:"GLboolean"}, {name:"blue", type:"GLboolean"}, {name:"alpha", type:"GLboolean"}]}], compileShader:[{args:[{name:"shader", 
    type:"WebGLShader"}]}], copyTexImage2D:[{args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"x", type:"GLint"}, {name:"y", type:"GLint"}, {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}, {name:"border", type:"GLint"}]}], copyTexSubImage2D:[{args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"x", type:"GLint"}, {name:"y", type:"GLint"}, 
    {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}]}], createBuffer:[{args:[]}], createFramebuffer:[{args:[]}], createProgram:[{args:[]}], createRenderbuffer:[{args:[]}], createShader:[{args:[{name:"type", type:"GLenum"}]}], createTexture:[{args:[]}], cullFace:[{args:[{name:"mode", type:"GLenum"}]}], deleteBuffer:[{args:[{name:"buffer", type:"WebGLBuffer"}]}], deleteFramebuffer:[{args:[{name:"framebuffer", type:"WebGLFramebuffer"}]}], deleteProgram:[{args:[{name:"program", type:"WebGLProgram"}]}], 
    deleteRenderbuffer:[{args:[{name:"renderbuffer", type:"WebGLRenderbuffer"}]}], deleteShader:[{args:[{name:"shader", type:"WebGLShader"}]}], deleteTexture:[{args:[{name:"texture", type:"WebGLTexture"}]}], depthFunc:[{args:[{name:"func", type:"GLenum"}]}], depthMask:[{args:[{name:"flag", type:"GLboolean"}]}], depthRange:[{args:[{name:"zNear", type:"GLclampf"}, {name:"zFar", type:"GLclampf"}]}], detachShader:[{args:[{name:"program", type:"WebGLProgram"}, {name:"shader", type:"WebGLShader"}]}], disable:[{args:[{name:"cap", 
    type:"GLenum"}]}], disableVertexAttribArray:[{args:[{name:"index", type:"GLuint"}]}], drawArrays:[{args:[{name:"mode", type:"GLenum"}, {name:"first", type:"GLint"}, {name:"count", type:"GLsizei"}]}], drawElements:[{args:[{name:"mode", type:"GLenum"}, {name:"count", type:"GLsizei"}, {name:"type", type:"GLenum"}, {name:"offset", type:"GLintptr"}]}], enable:[{args:[{name:"cap", type:"GLenum"}]}], enableVertexAttribArray:[{args:[{name:"index", type:"GLuint"}]}], finish:[{args:[]}], flush:[{args:[]}], 
    framebufferRenderbuffer:[{args:[{name:"target", type:"GLenum"}, {name:"attachment", type:"GLenum"}, {name:"renderbuffertarget", type:"GLenum"}, {name:"renderbuffer", type:"WebGLRenderbuffer"}]}], framebufferTexture2D:[{args:[{name:"target", type:"GLenum"}, {name:"attachment", type:"GLenum"}, {name:"textarget", type:"GLenum"}, {name:"texture", type:"WebGLTexture"}, {name:"level", type:"GLint"}]}], frontFace:[{args:[{name:"mode", type:"GLenum"}]}], generateMipmap:[{args:[{name:"target", type:"GLenum"}]}], 
    getActiveAttrib:[{args:[{name:"program", type:"WebGLProgram"}, {name:"index", type:"GLuint"}]}], getActiveUniform:[{args:[{name:"program", type:"WebGLProgram"}, {name:"index", type:"GLuint"}]}], getAttachedShaders:[{args:[{name:"program", type:"WebGLProgram"}]}], getAttribLocation:[{args:[{name:"program", type:"WebGLProgram"}, {name:"name", type:"DOMString"}]}], getParameter:[{args:[{name:"pname", type:"GLenum"}]}], getBufferParameter:[{args:[{name:"target", type:"GLenum"}, {name:"pname", type:"GLenum"}]}], 
    getError:[{args:[]}], getFramebufferAttachmentParameter:[{args:[{name:"target", type:"GLenum"}, {name:"attachment", type:"GLenum"}, {name:"pname", type:"GLenum"}]}], getProgramParameter:[{args:[{name:"program", type:"WebGLProgram"}, {name:"pname", type:"GLenum"}]}], getProgramInfoLog:[{args:[{name:"program", type:"WebGLProgram"}]}], getRenderbufferParameter:[{args:[{name:"target", type:"GLenum"}, {name:"pname", type:"GLenum"}]}], getShaderParameter:[{args:[{name:"shader", type:"WebGLShader"}, 
    {name:"pname", type:"GLenum"}]}], getShaderInfoLog:[{args:[{name:"shader", type:"WebGLShader"}]}], getShaderSource:[{args:[{name:"shader", type:"WebGLShader"}]}], getTexParameter:[{args:[{name:"target", type:"GLenum"}, {name:"pname", type:"GLenum"}]}], getUniform:[{args:[{name:"program", type:"WebGLProgram"}, {name:"location", type:"WebGLUniformLocation"}]}], getUniformLocation:[{args:[{name:"program", type:"WebGLProgram"}, {name:"name", type:"DOMString"}]}], getVertexAttrib:[{args:[{name:"index", 
    type:"GLuint"}, {name:"pname", type:"GLenum"}]}], getVertexAttribOffset:[{args:[{name:"index", type:"GLuint"}, {name:"pname", type:"GLenum"}]}], hint:[{args:[{name:"target", type:"GLenum"}, {name:"mode", type:"GLenum"}]}], isBuffer:[{args:[{name:"buffer", type:"WebGLBuffer"}]}], isEnabled:[{args:[{name:"cap", type:"GLenum"}]}], isFramebuffer:[{args:[{name:"framebuffer", type:"WebGLFramebuffer"}]}], isProgram:[{args:[{name:"program", type:"WebGLProgram"}]}], isRenderbuffer:[{args:[{name:"renderbuffer", 
    type:"WebGLRenderbuffer"}]}], isShader:[{args:[{name:"shader", type:"WebGLShader"}]}], isTexture:[{args:[{name:"texture", type:"WebGLTexture"}]}], lineWidth:[{args:[{name:"width", type:"GLfloat"}]}], linkProgram:[{args:[{name:"program", type:"WebGLProgram"}]}], pixelStorei:[{args:[{name:"pname", type:"GLenum"}, {name:"param", type:"GLint"}]}], polygonOffset:[{args:[{name:"factor", type:"GLfloat"}, {name:"units", type:"GLfloat"}]}], readPixels:[{args:[{name:"x", type:"GLint"}, {name:"y", type:"GLint"}, 
    {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"pixels", type:"ArrayBufferView"}]}], renderbufferStorage:[{args:[{name:"target", type:"GLenum"}, {name:"internalformat", type:"GLenum"}, {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}]}], sampleCoverage:[{args:[{name:"value", type:"GLclampf"}, {name:"invert", type:"GLboolean"}]}], scissor:[{args:[{name:"x", type:"GLint"}, {name:"y", type:"GLint"}, 
    {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}]}], shaderSource:[{args:[{name:"shader", type:"WebGLShader"}, {name:"source", type:"DOMString"}]}], stencilFunc:[{args:[{name:"func", type:"GLenum"}, {name:"ref", type:"GLint"}, {name:"mask", type:"GLuint"}]}], stencilFuncSeparate:[{args:[{name:"face", type:"GLenum"}, {name:"func", type:"GLenum"}, {name:"ref", type:"GLint"}, {name:"mask", type:"GLuint"}]}], stencilMask:[{args:[{name:"mask", type:"GLuint"}]}], stencilMaskSeparate:[{args:[{name:"face", 
    type:"GLenum"}, {name:"mask", type:"GLuint"}]}], stencilOp:[{args:[{name:"fail", type:"GLenum"}, {name:"zfail", type:"GLenum"}, {name:"zpass", type:"GLenum"}]}], stencilOpSeparate:[{args:[{name:"face", type:"GLenum"}, {name:"fail", type:"GLenum"}, {name:"zfail", type:"GLenum"}, {name:"zpass", type:"GLenum"}]}], texImage2D:[{args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}, 
    {name:"border", type:"GLint"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"pixels", type:"ArrayBufferView"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"pixels", type:"ImageData"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"format", type:"GLenum"}, {name:"type", 
    type:"GLenum"}, {name:"image", type:"HTMLImageElement"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"canvas", type:"HTMLCanvasElement"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"internalformat", type:"GLenum"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"video", type:"HTMLVideoElement"}]}], texParameterf:[{args:[{name:"target", 
    type:"GLenum"}, {name:"pname", type:"GLenum"}, {name:"param", type:"GLfloat"}]}], texParameteri:[{args:[{name:"target", type:"GLenum"}, {name:"pname", type:"GLenum"}, {name:"param", type:"GLint"}]}], texSubImage2D:[{args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"pixels", type:"ArrayBufferView"}]}, 
    {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"pixels", type:"ImageData"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"image", type:"HTMLImageElement"}]}, {args:[{name:"target", type:"GLenum"}, 
    {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"canvas", type:"HTMLCanvasElement"}]}, {args:[{name:"target", type:"GLenum"}, {name:"level", type:"GLint"}, {name:"xoffset", type:"GLint"}, {name:"yoffset", type:"GLint"}, {name:"format", type:"GLenum"}, {name:"type", type:"GLenum"}, {name:"video", type:"HTMLVideoElement"}]}], uniform1f:[{args:[{name:"location", type:"WebGLUniformLocation"}, 
    {name:"x", type:"GLfloat"}]}], uniform1fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"FloatArray"}]}], uniform1i:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLint"}]}], uniform1iv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"Int32Array"}]}], uniform2f:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}]}], uniform2fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, 
    {name:"v", type:"FloatArray"}]}], uniform2i:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLint"}, {name:"y", type:"GLint"}]}], uniform2iv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"Int32Array"}]}], uniform3f:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}, {name:"z", type:"GLfloat"}]}], uniform3fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"FloatArray"}]}], 
    uniform3i:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLint"}, {name:"y", type:"GLint"}, {name:"z", type:"GLint"}]}], uniform3iv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"Int32Array"}]}], uniform4f:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}, {name:"z", type:"GLfloat"}, {name:"w", type:"GLfloat"}]}], uniform4fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", 
    type:"FloatArray"}]}], uniform4i:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"x", type:"GLint"}, {name:"y", type:"GLint"}, {name:"z", type:"GLint"}, {name:"w", type:"GLint"}]}], uniform4iv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"v", type:"Int32Array"}]}], uniformMatrix2fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"transpose", type:"GLboolean"}, {name:"value", type:"FloatArray"}]}], uniformMatrix3fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, 
    {name:"transpose", type:"GLboolean"}, {name:"value", type:"FloatArray"}]}], uniformMatrix4fv:[{args:[{name:"location", type:"WebGLUniformLocation"}, {name:"transpose", type:"GLboolean"}, {name:"value", type:"FloatArray"}]}], useProgram:[{args:[{name:"program", type:"WebGLProgram"}]}], validateProgram:[{args:[{name:"program", type:"WebGLProgram"}]}], vertexAttrib1f:[{args:[{name:"indx", type:"GLuint"}, {name:"x", type:"GLfloat"}]}], vertexAttrib1fv:[{args:[{name:"indx", type:"GLuint"}, {name:"values", 
    type:"FloatArray"}]}], vertexAttrib2f:[{args:[{name:"indx", type:"GLuint"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}]}], vertexAttrib2fv:[{args:[{name:"indx", type:"GLuint"}, {name:"values", type:"FloatArray"}]}], vertexAttrib3f:[{args:[{name:"indx", type:"GLuint"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}, {name:"z", type:"GLfloat"}]}], vertexAttrib3fv:[{args:[{name:"indx", type:"GLuint"}, {name:"values", type:"FloatArray"}]}], vertexAttrib4f:[{args:[{name:"indx", 
    type:"GLuint"}, {name:"x", type:"GLfloat"}, {name:"y", type:"GLfloat"}, {name:"z", type:"GLfloat"}, {name:"w", type:"GLfloat"}]}], vertexAttrib4fv:[{args:[{name:"indx", type:"GLuint"}, {name:"values", type:"FloatArray"}]}], vertexAttribPointer:[{args:[{name:"indx", type:"GLuint"}, {name:"size", type:"GLint"}, {name:"type", type:"GLenum"}, {name:"normalized", type:"GLboolean"}, {name:"stride", type:"GLsizei"}, {name:"offset", type:"GLintptr"}]}], viewport:[{args:[{name:"x", type:"GLint"}, {name:"y", 
    type:"GLint"}, {name:"width", type:"GLsizei"}, {name:"height", type:"GLsizei"}]}]}, a = {ArrayBuffer:a("null", "ArrayBuffer", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "Array"), ArrayBufferView:a("null", "ArrayBuffer", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "Array"), DOMString:a("null", "string"), FloatArray:a("null", 
    "Float32Array", "Array"), GLbitfield:a("number"), GLboolean:a("boolean"), GLclampf:a("number"), GLenum:a("number"), GLfloat:a("number"), GLint:a("number"), GLintptr:a("number"), GLsizei:a("number"), GLsizeiptr:a("number"), GLuint:a("number"), HTMLCanvasElement:a("null", "HTMLCanvasElement"), HTMLImageElement:a("null", "HTMLImageElement"), HTMLVideoElement:a("null", "HTMLVideoElement"), ImageData:a("null", "ImageData"), Int32Array:a("null", "Int32Array", "Array"), WebGLBuffer:a("null", "WebGLBuffer"), 
    WebGLFrameBuffer:a("null", "WebGLFrameBuffer"), WebGLProgram:a("null", "WebGLProgram"), WebGLRenderbuffer:a("null", "WebGLRenderbuffer"), WebGLShader:a("null", "WebGLShader"), WebGLTexture:a("null", "WebGLTexture"), WebGLUniformLocation:a("null", "WebGLUniformLocation"), "float":a("number"), "long":a("number")}, r = {ArrayBuffer:m, ArrayBufferView:m, DOMString:g, FloatArray:m, GLbitfield:k, GLboolean:function(a) {
      return a === t || a === u
    }, GLclampf:function(a) {
      return"number" === typeof a && 0 <= a && 1 >= a
    }, GLenum:k, GLfloat:g, GLint:k, GLintptr:k, GLsizei:k, GLsizeiptr:k, GLuint:k, HTMLCanvasElement:g, HTMLImageElement:g, HTMLVideoElement:g, ImageData:g, Int32Array:function(a) {
      if("array" === s(a)) {
        for(var b = 0;b != a.length;b++) {
          if(!k(a[b])) {
            return u
          }
        }
      }
      return t
    }, WebGLBuffer:g, WebGLFrameBuffer:g, WebGLProgram:g, WebGLRenderbuffer:g, WebGLShader:g, WebGLTexture:g, WebGLUniformLocation:g, "float":g, "long":k};
    return function(a) {
      return c(this, a)
    }
  }()), p = function() {
    return new function() {
    }
  }(), function(c) {
    var l = /[\t\r\n ]+/g;
    c.A = {};
    c.A.H = 0;
    c.A.I = 2;
    c.A.J = 1;
    c.A.K = 3;
    c.A.parse = function(d) {
      for(var d = d.split("\n"), f = "", c = 0, b = [], a = [], g = [], m = [], k = [], s = [], v = 0, r = {v:function(a) {
        if(!a || 3 != a.length) {
          throw Error("Can't accept Vertic without 3 components. LINE:" + f);
        }
        b.push(Number(a[0]), Number(a[1]), Number(a[2]))
      }, vn:function(b) {
        if(!b || 3 != b.length) {
          throw Error("Can't accept Normal without 3 components. LINE:" + c);
        }
        a.push(Number(b[0]), Number(b[1]), Number(b[2]))
      }, vt:function(a) {
        if(!a || 2 > a.length) {
          throw Error("Can't accept Texture with less than 2 components. LINE:" + c);
        }
        g.push(Number(a[0]), Number(a[1]))
      }, f:function x(a) {
        if(!a || 3 > a.length) {
          throw Error("Can't accept Face with less than 3 components. LINE:" + c);
        }
        if(3 < a.length) {
          for(var b = a.length - 1;1 !== b;b--) {
            x([a[0], a[b - 1], a[b]])
          }
        }else {
          v++;
          for(var e = 0;3 !== e;e++) {
            var b = a[e].split("/"), d = parseInt(b[0], 10) - 1, g = parseInt(b[1], 10) - 1, b = parseInt(b[2], 10) - 1;
            m.push(d);
            isNaN(g) || s.push(g);
            isNaN(b) || k.push(b)
          }
        }
      }}, c = 0;c != d.length;) {
        var f = d[c++].trim(), o = f.split(l), n = o.shift();
        if(n in r) {
          r[n](o)
        }
      }
      d = 0;
      if(0 !== g.length || 0 !== s.length) {
        if(d |= 1, m.length !== s.length) {
          throw Error("Texture indice don't match Vertic indice.");
        }
      }
      if(0 !== a.length || 0 !== k.length) {
        if(d |= 2, m.length !== k.length) {
          throw Error("Normal indice don't match Vertic indice.");
        }
      }
      n = o = r = 0;
      switch(d) {
        case 0:
          n = 4;
          break;
        case 1:
          n = 6;
          r = 16;
          break;
        case 2:
          n = 8;
          o = 16;
          break;
        case 3:
          n = 10;
          r = 16;
          o = 24;
          break;
        default:
          throw Error("Schema broken.");
      }
      for(var e = new Float32Array(3 * v * n), q = 0, h = 0, w = h = h = 0;w != m.length;w++) {
        if(h = 3 * m[w], e[q++] = b[h++], e[q++] = b[h++], e[q++] = b[h], e[q++] = 1, d & 1 && (h = 2 * s[w], e[q++] = g[h++], e[q++] = g[h]), d & 2) {
          h = 3 * k[w], e[q++] = a[h++], e[q++] = a[h++], e[q++] = a[h], e[q++] = 0
        }
      }
      return{stride:4 * n, schema:d, voffset:0, toffset:r, noffset:o, rawData:e, numVertices:3 * v}
    }
  }(p), function(c) {
    function l(d) {
      d = d.toLowerCase();
      return"application/json" === d ? b : "text/html" === d ? s : -1 !== d.indexOf("javascript") ? a : -1 !== d.indexOf("xml") ? g : -1 !== d.indexOf("image") ? m : i
    }
    function d(a, d, f) {
      function n(b, e) {
        if(i) {
          var f = Object.create(a);
          f.data = e;
          d(b, f)
        }else {
          d(b, e)
        }
      }
      var e, i = "string" !== typeof a;
      if(i) {
        if(!a.file) {
          throw Error("data must contain a file path.");
        }
        e = a.file
      }else {
        e = a
      }
      var h = 0, s = u, j = new XMLHttpRequest;
      j.onreadystatechange = function() {
        if(!s && (2 === j.readyState || 3 === j.readyState)) {
          if(h = l(j.getResponseHeader("content-type")), e.toLowerCase().lastIndexOf(".obj") + 4 === e.length && (h = k), h === m) {
            s = t;
            j.abort();
            var a = new Image;
            a.onload = function() {
              n(e, a)
            };
            a.onerror = function() {
              f(e, "")
            };
            a.src = e;
            return
          }
        }
        if(!s && 4 === j.readyState) {
          var d = j.status;
          if(200 <= d && 299 >= d || 304 === d || 0 === d) {
            if(h === g) {
              n(e, j.responseXML)
            }else {
              if(h === b) {
                try {
                  n(e, JSON.parse(j.responseText))
                }catch(i) {
                  f(e, i)
                }
              }else {
                if(h === k) {
                  try {
                    n(e, c.A.parse(j.responseText))
                  }catch(v) {
                    f(e, v)
                  }
                }else {
                  n(e, j.responseText)
                }
              }
            }
          }else {
            f(e, d || 0)
          }
        }
      };
      j.open("GET", e, t);
      j.send(null)
    }
    function f() {
    }
    var i = 1, b = 2, a = 3, g = 4, m = 5, k = 6, s = 7;
    c.F = {};
    c.F.X = function(a) {
      function b(a, d) {
        b = c = f;
        h(a, d)
      }
      function c(a, b) {
        j++;
        i[a] = b;
        e(a, j / m);
        j === m && l(i)
      }
      if(!a) {
        throw Error("Passed nothing in loadFiles");
      }
      for(var g = a.files || [], e = a.update || f, l = a.S || f, h = a.error || f, m = g.length, j = 0, i = Object.create(null), a = 0, k;k = g[a++];) {
        d(k, c, b)
      }
    }
  }(p), function(c) {
    function l(f) {
      var c, b;
      for(c = 0;b = d[c++];) {
        if(b = f.getContext(b, {alpha:u, preserveDrawingBuffer:t})) {
          return b
        }
      }
      return null
    }
    var d = ["experimental-webgl", "webgl", "moz-webgl", "webkit-3d"];
    c.N = l;
    c.Q = function(d) {
      return l(d).T()
    }
  }(p), function(c) {
    function l() {
      for(var b = 0;b !== d;b++) {
        i[b] = 0, f[b] = 0
      }
    }
    var d = 256, f = new Uint8Array(d), i = new Uint8Array(d);
    l();
    document.addEventListener("keydown", function(b) {
      b = b.keyCode;
      b < d && (f[b] = 1)
    }, u);
    document.addEventListener("keyup", function(b) {
      b = b.keyCode;
      b < d && (f[b] = 0)
    }, u);
    window.addEventListener("blur", function() {
      l()
    }, u);
    c.keys = {};
    c.keys.L = {backspace:8, tab:9, enter:13, shift:16, ctrl:17, alt:18, pause:19, capslock:20, escape:27, space:32, pageUp:33, pageDown:34, end:35, home:36, left:37, up:38, right:39, down:40, insert:45, "delete":46, num0:48, num1:49, num2:50, num3:51, num4:52, num5:53, num6:54, num7:55, num8:56, num9:57, a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, windowKeyLeft:91, windowKeyRight:92, select:93, 
    numpad0:96, numpad1:97, numpad2:98, numpad3:99, numpad4:100, numpad5:101, numpad6:102, numpad7:103, numpad8:104, numpad9:105, multiply:106, add:107, subtract:109, decimalPoint:110, divide:111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, semicolon:186, equals:187, comma:188, dash:189, period:190, slash:191, graveAccent:192, openBracket:219, backSlash:220, closeBraket:221, quote:222};
    c.keys.update = function() {
      for(var b = 0;b !== d;b++) {
        i[b] = f[b]
      }
    };
    c.keys.V = function(b) {
      return 0 !== f[b]
    };
    c.keys.W = function(b) {
      return 0 === f[b]
    };
    c.keys.aa = function(b) {
      return 0 !== f[b] && 0 === i[b]
    };
    c.keys.ba = function(b) {
      return 0 === f[b] && 0 !== i[b]
    }
  }(p), function(c) {
    c.D = {};
    c.D.M = function(c, d) {
      for(var f = ["#define VERTEX\n", "#define FRAGMENT\n"], i = [c.createShader(c.VERTEX_SHADER), c.createShader(c.FRAGMENT_SHADER)], b = c.createProgram(), a = null, g = "", m = 0;m != f.length;m++) {
        a = i[m];
        c.shaderSource(a, f[m] + d);
        c.compileShader(a);
        if(g = c.getShaderInfoLog(a)) {
          throw Error(g);
        }
        c.attachShader(b, a)
      }
      c.linkProgram(b);
      if(g = c.getProgramInfoLog(b)) {
        throw Error(g);
      }
      return b
    }
  }(p), function(c) {
    c.C = {};
    c.C.O = function() {
      var c = new Float32Array([-1, -1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, -1, -1, -1, 1, 1, -1, -1, 1, 1, 1, -1, 1, -1, 1, -1, 1]), d = new Float32Array([-0.577350269, -0.577350269, 0.577350269, 0, 0.577350269, -0.577350269, 0.577350269, 0, 0.577350269, 0.577350269, 0.577350269, 0, -0.577350269, 0.577350269, 0.577350269, 0, -0.577350269, -0.577350269, -0.577350269, 0, 0.577350269, -0.577350269, -0.577350269, 0, 0.577350269, 0.577350269, -0.577350269, 0, -0.577350269, 0.577350269, -0.577350269, 
      0]), f = new Uint16Array([0, 1, 2, 0, 2, 3, 1, 5, 6, 1, 6, 2, 5, 4, 7, 5, 7, 6, 4, 0, 3, 4, 3, 7, 3, 2, 6, 3, 6, 7, 4, 5, 1, 4, 1, 0]);
      return{G:c, U:f, Y:d}
    };
    c.C.P = function(c) {
      function d(b, a, c, f, k, i, l, r, o) {
        function n(a, b) {
          return[(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]
        }
        function e(a, b) {
          return[(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
        }
        if(0 === o) {
          b.push(c[0], c[1], c[2], 1), b.push(f[0], f[1], f[2], 1), b.push(k[0], k[1], k[2], 1), a.push(i[0], i[1]), a.push(l[0], l[1]), a.push(r[0], r[1])
        }else {
          var q = n(c, f), h = n(f, k), p = n(k, c), j = e(i, l), x = e(l, r), y = e(r, i);
          d(b, a, c, q, p, i, j, y, o - 1);
          d(b, a, f, h, q, l, x, j, o - 1);
          d(b, a, k, p, h, r, y, x, o - 1);
          d(b, a, q, h, p, j, x, y, o - 1)
        }
      }
      var f = [], i = [];
      d(f, i, [1, 0, 1], [-1, 0, 1], [-1, 0, -1], [1, 1], [0, 1], [0, 0], c || 0);
      d(f, i, [1, 0, 1], [-1, 0, -1], [1, 0, -1], [1, 1], [0, 0], [1, 0], c || 0);
      return{G:new Float32Array(f), $:new Float32Array(i)}
    }
  }(p), function(c) {
    var l = !!c.keys, d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(c) {
      window.setTimeout(c, 1E3 / 60)
    };
    c.Z = function() {
      var f = -1, i = 0, b = {delta:0, total:0}, a = {time:b, frame:0, reset:function() {
        f = -1
      }};
      return function(g) {
        d(function() {
          var d = Date.now();
          -1 === f && (f = i = d, a.frame = 0);
          b.R = (d - i) / 1E3;
          b.total = (d - f) / 1E3;
          g(a);
          l && c.keys.update();
          i = d;
          a.frame++
        })
      }
    }()
  }(p), p.version = "v0.2");
  var p = t;
  console.log("Hello world")
})();

