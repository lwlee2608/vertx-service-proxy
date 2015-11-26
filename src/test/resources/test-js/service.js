/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module test-js/service */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JService = io.vertx.serviceproxy.clustered.Service;

/**

 @class
*/
var Service = function(j_val) {

  var j_service = j_val;
  var that = this;

  /**

   @public
   @param name {string} 
   @param result {function} 
   @return {Service}
   */
  this.hello = function(name, result) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_service["hello(java.lang.String,io.vertx.core.Handler)"](name, function(ar) {
      if (ar.succeeded()) {
        result(ar.result(), null);
      } else {
        result(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param e {Object} 
   @param result {function} 
   @return {Service}
   */
  this.methodUsingEnum = function(e, result) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_service["methodUsingEnum(io.vertx.serviceproxy.testmodel.SomeEnum,io.vertx.core.Handler)"](io.vertx.serviceproxy.testmodel.SomeEnum.valueOf(__args[0]), function(ar) {
      if (ar.succeeded()) {
        result(ar.result(), null);
      } else {
        result(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param result {function} 
   @return {Service}
   */
  this.methodReturningEnum = function(result) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_service["methodReturningEnum(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        result(utils.convReturnEnum(ar.result()), null);
      } else {
        result(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_service;
};

/**

 @memberof module:test-js/service
 @param vertx {Vertx} 
 @param address {string} 
 @return {Service}
 */
Service.createProxy = function(vertx, address) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(JService["createProxy(io.vertx.core.Vertx,java.lang.String)"](vertx._jdel, address), Service);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = Service;