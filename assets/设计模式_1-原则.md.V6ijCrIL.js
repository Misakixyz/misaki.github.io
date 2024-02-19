import{j as a,b as e,c as t,aa as r}from"./chunks/framework.aOHm2UBJ.js";const _=JSON.parse('{"title":"设计模式原则","description":"设计模式7大原则","frontmatter":{"title":"设计模式原则","description":"设计模式7大原则","tags":"设计模式","comment":true,"date":"2023-09-19T00:00:00.000Z","outline":[2,3]},"headers":[],"relativePath":"设计模式/1-原则.md","filePath":"设计模式/1-原则.md","lastUpdated":null}'),i={name:"设计模式/1-原则.md"},l=r('<h2 id="单一职责原则" tabindex="-1">单一职责原则 <a class="header-anchor" href="#单一职责原则" aria-label="Permalink to &quot;单一职责原则&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>一个类只负责一个功能领域中的相应职责。</p><p>实现高内聚、低耦合</p><p>单一职责原则（Single Responsibility Principle，SRP）：一个类只负责一个功能领域中的相应职责。或者可以定义为：就一个类而言，应该只有一个引起它变化的原因。</p><h2 id="开闭原则" tabindex="-1">开闭原则 <a class="header-anchor" href="#开闭原则" aria-label="Permalink to &quot;开闭原则&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>软件实体应对扩展开放，而对修改关闭。</p><p>为满足开闭原则，设计实现抽象层</p><p>开闭原则（Open-Closed Principle，OCP）：一个软件实体应当对扩展开放，对修改关闭。即软件实体应尽量在不修改原有代码的情况下进行扩展。</p><h2 id="里氏代换原则" tabindex="-1">里氏代换原则 <a class="header-anchor" href="#里氏代换原则" aria-label="Permalink to &quot;里氏代换原则&quot;">​</a></h2><h3 id="定义-2" tabindex="-1">定义 <a class="header-anchor" href="#定义-2" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>所有引用基类对象的地方能够透明地使用其子类的对象。</p><p>将父类设计成抽象类或接口，让子类继承父类或实现接口，并实现在父类中声明的方法。</p><p>开闭原则（Open-Closed Principle，OCP）：一个软件实体应当对扩展开放，对修改关闭。即软件实体应尽量在不修改原有代码的情况下进行扩展。</p><h2 id="依赖倒转原则" tabindex="-1">依赖倒转原则 <a class="header-anchor" href="#依赖倒转原则" aria-label="Permalink to &quot;依赖倒转原则&quot;">​</a></h2><h3 id="定义-3" tabindex="-1">定义 <a class="header-anchor" href="#定义-3" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>抽象不应该依赖于细节，细节应该依赖于抽象。</p><p>尽量引用层次高的抽象类</p><p>依赖倒转原则要求在程序代码中传递参数时或在关联关系中，尽量引用层次高的抽象层类，即使用接口和抽象类进行变量类型声明、参数类型声明、方法返回类型声明，以及数据类型的转换等，而不要用具体类来做这些事情。为了确保该原则的应用，一个具体类应当只实现接口或抽象类中声明过的方法，而不要给出多余的方法，否则将无法调用到在子类中增加的新方法。</p><h2 id="接口隔离原则" tabindex="-1">接口隔离原则 <a class="header-anchor" href="#接口隔离原则" aria-label="Permalink to &quot;接口隔离原则&quot;">​</a></h2><h3 id="定义-4" tabindex="-1">定义 <a class="header-anchor" href="#定义-4" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>使用多个专门的接口，而不使用单一的总接口。</p><p>根据接口隔离原则，当一个接口太大时，需要将它分割成一些更细小的接口，使用该接口的客户端仅需知道与之相关的方法即可。每个接口应该承担一种相对独立的角色。这里的“接口”有两种不同的含义：一种是指一个类型所具有的方法特征的集合，仅仅是一种逻辑上的抽象；另一种是指某种语言具体的“接口”定义，有严格的定义和结构，例如 Java 语言中的 interface。对于这两种不同的含义，ISP 的表达方式以及含义都有所不同。</p><ul><li>（1）当把“接口”理解成一个类型所提供的所有方法特征的集合时，这就是一种逻辑上的概念，接口的划分将直接带来类型的划分。可以把接口理解成角色，一个接口只能代表一个角色，每个角色都有它特定的一个接口，此时，这个原则可以叫作“角色隔离原则”。</li><li>（2）如果把“接口”理解成狭义的特定语言的接口，那么 ISP 表达的意思是指接口仅仅提供客户端需要的行为，客户端不需要的行为则隐藏起来，应当为客户端提供尽可能小的单独的接口，而不要提供大的总接口。在面向对象编程语言中，实现一个接口就需要实现该接口中定义的所有方法，因此大的总接口使用起来不一定很方便。为了使接口的职责单一，需要将大接口中的方法根据其职责不同分别放在不同的小接口中，以确保每个接口使用起来都较为方便，并各承担某一单一角色。接口应该尽量细化，同时接口中的方法应该尽量少，每个接口中只包含一个客户端（如子模块或业务逻辑类）所需的方法即可，这种机制也称为“定制服务”，即为不同的客户端提供宽窄不同的接口。</li></ul><h2 id="合成复用原则" tabindex="-1">合成复用原则 <a class="header-anchor" href="#合成复用原则" aria-label="Permalink to &quot;合成复用原则&quot;">​</a></h2><h3 id="定义-5" tabindex="-1">定义 <a class="header-anchor" href="#定义-5" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>尽量使用对象组合，而不是继承来达到复用的目的</p><p>在新对象里通过关联关系（包括组合关系和聚合关系）来使用一些已有的对象，使之成为新对象的一部分。</p><p>合成复用原则就是在一个新的对象里通过关联关系（包括组合关系和聚合关系）来使用一些已有的对象，使之成为新对象的一部分；新对象通过委派调用已有对象的方法达到复用功能的目的。简言之：复用时要尽量使用组合／聚合关系（关联关系），少用继承。</p><h2 id="迪米特法则" tabindex="-1">迪米特法则 <a class="header-anchor" href="#迪米特法则" aria-label="Permalink to &quot;迪米特法则&quot;">​</a></h2><h3 id="定义-6" tabindex="-1">定义 <a class="header-anchor" href="#定义-6" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>一个软件实体应当尽可能地少与其他实体发生相互作用。</p><p>尽量减少对象之间的交互</p><p>如果一个系统符合迪米特法则，那么当其中某一个模块发生修改时，就会尽量少地影响其他模块，扩展会相对容易。这是对软件实体之间通信的限制。迪米特法则要求限制软件实体之间通信的宽度和深度。迪米特法则可降低系统的耦合度，使类与类之间保持松散的耦合关系。</p>',35),o=[l];function h(n,d,p,s,c,u){return e(),t("div",null,o)}const q=a(i,[["render",h]]);export{_ as __pageData,q as default};
