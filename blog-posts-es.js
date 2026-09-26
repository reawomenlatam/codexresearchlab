/* Codex Research - contenido del blog en español.
   Se expone en window.REA.POSTS_ES como un mapa slug -> campos traducidos.

   No es una copia del post entero: solo los campos que cambian de idioma
   (title, metaTitle, metaDescription, category, date, excerpt, imageAlt, body,
   faq, cta). El resto -- slug, dateISO, image, references, related -- se hereda
   del post en inglés, así una corrección de fuente o de portada no hay que
   hacerla dos veces.

   Un artículo sin entrada aquí NO genera página en español: build-seo.js lo
   salta. Publicar /es/article/<slug>/ con el texto en inglés sería peor que no
   tener la página.

   Los enlaces internos del cuerpo se escriben igual que en inglés
   (article/<slug>/, catalog/, verify/): build-seo.js los reescribe a su versión
   en español cuando existe, y los deja en inglés cuando no. */
(function () {
  const cite = (text, url) =>
    ` <a class="cite" href="${url}" target="_blank" rel="noopener nofollow">(${text})</a>`;

  const POSTS_ES = {

    'buy-research-peptides-panama': {
      title: 'Cómo comprar péptidos de investigación en Panamá',
      metaTitle: 'Comprar péptidos de investigación en Panamá: COA y envío',
      metaDescription: 'Comprar péptidos de investigación en Panamá: cómo se verifica cada lote, qué debe mostrar el COA, entrega en la ciudad y formas de pago.',
      category: 'Guía de compra',
      date: '02 ago 2026',
      excerpt: 'Entrega el mismo día en la ciudad de Panamá, pago local y cómo verificar cada lote antes de pagar.',
      imageAlt: 'Tiempos de entrega, pago en el checkout y cómo comprobar un lote antes de pagar.',
      body: `
        <p class="lead">Comprar péptidos de investigación en Panamá se diferencia de pedirlos al extranjero en algo que pesa más que el precio: el material ya está en el país. No hay nada esperando en aduana ni semanas de tránsito. Esta guía cubre cómo se hace el pedido, cuánto cuesta y cuánto tarda la entrega, cómo se paga, y cómo comprobar un vial antes de pagarlo.</p>

        <h2>Cómo se hace un pedido</h2>
        <p>Agregas los productos al carrito y pagas en el sitio. El pedido se cierra en el checkout, no se negocia por chat, y el precio que cobra el servidor se calcula en el momento del pago, así que coincide con lo que muestra el carrito.</p>
        <p>Un especialista responde dudas por WhatsApp antes y después del pedido. Es un canal de soporte, no un paso de la compra: nada hay que arreglar por mensaje para que un pedido salga.</p>

        <h2>Tiempos y costo de entrega</h2>
        <ul>
          <li><b>Ciudad de Panamá:</b> el mismo día, de 1 a 2 horas, $4 de envío fijo.</li>
          <li><b>Interior:</b> David, Chitré, Colón y otras ciudades, al siguiente día hábil por transporte Fergunson.</li>
          <li><b>Envío gratis</b> en pedidos sobre $100.</li>
        </ul>
        <p>Todo sale en empaque sellado y protegido, y cada vial va etiquetado con su compuesto, su concentración y su número de lote. Si el sello llega roto, no recibas el paquete.</p>

        <h2>Por qué el inventario local cambia el material, no solo la espera</h2>
        <p>Un paquete internacional pasa semanas moviéndose entre bodegas y vehículos, y lo que cuenta no son los días sino cuántos ciclos de temperatura y humedad atravesó. Un péptido liofilizado es estable mientras se mantenga seco, y cada calentamiento y enfriamiento es una oportunidad para que la humedad llegue hasta él.</p>
        <p>Dos horas dentro de una ciudad son un solo trayecto corto. Es una propiedad del material y de cómo viaja, y nuestra guía de <a href="article/how-to-store-research-peptides/">almacenamiento</a> lo explica en detalle.</p>

        <h2>Pagar desde Panamá</h2>
        <p>El pago ocurre en el checkout del sitio, con dos métodos disponibles.</p>
        <ul>
          <li><b>Tarjeta:</b> Visa, Mastercard y American Express, procesadas por Stripe. El pago termina en el checkout seguro de Stripe, así que los datos de la tarjeta nunca pasan por este sitio.</li>
          <li><b>Cripto:</b> USDC o USDT en Ethereum, enviados desde tu propia billetera y verificados en cadena antes de liberar el pedido.</li>
        </ul>
        <p>Los precios se muestran en dólares estadounidenses, la moneda de curso en Panamá, así que no hay conversión al momento de pagar.</p>

        <h2>Comprobar un vial antes de pagar</h2>
        <p>Esta parte conviene hacerla compres donde compres. Un número de lote impreso en una etiqueta solo sirve si conecta con algo.</p>
        <ul>
          <li>Escribe el número de lote en la <a href="verify/">página de verificación</a>. Te dice si ese lote existe y a qué documento corresponde.</li>
          <li>Pide el certificado de análisis de ese lote. Se puede pedir antes del pedido, no solo después.</li>
          <li>Lee el certificado completo. Nuestra guía sobre <a href="article/how-to-read-a-certificate-of-analysis/">cómo leer un certificado</a> explica qué significa cada campo y qué ausencias importan.</li>
        </ul>
        <p>Las tres preguntas que responde un documento completo son qué lote es, qué tan puro está y si es la molécula correcta. Un documento que solo responde una está incompleto, venga de donde venga.</p>

        <h2>Qué preguntarle a cualquier proveedor</h2>
        <p>Tres preguntas resuelven casi todo, y conviene hacerlas antes de pagar.</p>
        <ul>
          <li><b>¿El número de lote del documento coincide con el del vial?</b> Si no, el certificado describe el material de otra persona.</li>
          <li><b>¿Con qué método se midió, y en qué fecha?</b> Un porcentaje sin procedimiento detrás es una afirmación, no un resultado.</li>
          <li><b>¿Quién firma el certificado, y además vende lo que midió?</b> Que mida un tercero separa a quien afirma de quien cobra.</li>
        </ul>
        <p>Ninguna es específica de Panamá ni de este proveedor. Son los criterios que hacen comprobable cualquier compra, y un proveedor que no pueda responderlas ya te dijo algo útil.</p>

        <h2>Pedir desde fuera de la ciudad</h2>
        <p>El interior se atiende por transporte terrestre con entrega al siguiente día hábil, así que un pedido hecho tarde llega al día laborable siguiente y no esa misma noche. Los feriados lo corren un día.</p>
        <p>El empaque es el mismo sin importar el destino: sellado, protegido y etiquetado por vial. El día adicional es un tramo controlado y no un trámite de aduana, porque el inventario ya está en el país.</p>

        <h2>Qué esperar al abrirlo</h2>
        <p>El material liofilizado puede verse como muy poco: una película fina, unas escamas en el vidrio, a veces nada evidente. Un vial que parece vacío casi siempre no ha perdido nada, y es consecuencia de <a href="article/lyophilization-freeze-drying/">cómo funciona la liofilización</a> y de si la formulación llevaba un agente de relleno.</p>
        <p>Deja que un vial frío llegue a temperatura ambiente antes de abrirlo, para que no se forme condensación por dentro. Guárdalo seco, fresco y lejos de la luz directa.</p>

        <h2>Precios e inventario</h2>
        <p>Los precios se fijan en el sitio y el servidor calcula el cobro en el momento del pago, así que el precio del carrito es el precio cobrado. El inventario está en el país, que es lo que hace posible la entrega el mismo día y también lo que la limita: un compuesto agotado en Panamá no aparece en una furgoneta por arte de magia, y la respuesta honesta en ese caso es una fecha.</p>

        <h2>Solo para uso en investigación</h2>
        <p>Todos los productos que vende Codex Research son estrictamente para investigación y desarrollo de laboratorio. No son para consumo humano ni animal y no están destinados a diagnosticar, tratar, curar ni prevenir ninguna enfermedad. No damos orientación de uso, ni antes ni después de un pedido.</p>
      `,
      faq: [
        {
          "q": "¿Cuánto tarda la entrega en Panamá?",
          "a": "En la ciudad de Panamá, de 1 a 2 horas el mismo día, con $4 de envío fijo. Ciudades del interior como David, Chitré y Colón reciben al siguiente día hábil por transporte Fergunson. El envío es gratis en pedidos sobre $100."
        },
        {
          "q": "¿Cómo se paga?",
          "a": "En el checkout del sitio. Las tarjetas Visa, Mastercard y American Express las procesa Stripe y el pago termina en su checkout seguro, así que los datos de la tarjeta nunca pasan por este sitio. También se acepta cripto en USDC o USDT sobre Ethereum, verificada en cadena antes de liberar el pedido."
        },
        {
          "q": "¿Tengo que pedir por WhatsApp?",
          "a": "No. Los pedidos se hacen y se pagan en el checkout. WhatsApp es un canal de soporte donde un especialista responde dudas antes y después del pedido, no un paso de la compra."
        },
        {
          "q": "¿Puedo ver el certificado de análisis antes de pedir?",
          "a": "Sí. El certificado de un lote se puede pedir antes del pedido y no solo después de la entrega, y el número de lote se puede escribir en la página de verificación para confirmar a qué documento corresponde."
        },
        {
          "q": "¿Comprar local cambia algo del material?",
          "a": "Acorta el tránsito. Un péptido liofilizado es estable mientras está seco, y un trayecto largo significa más ciclos de temperatura y humedad, cada uno una oportunidad para que llegue la humedad. Una entrega local corta es un solo trayecto."
        },
        {
          "q": "Mi vial se ve vacío. ¿Falta algo?",
          "a": "Normalmente no. A las masas que se suelen despachar, el material liofilizado puede ser una película fina o unas escamas en el vidrio. La apariencia depende de cómo salió el secado y de si había un agente de relleno, no de cuánto compuesto hay."
        }
      ],
      cta: '¿Listo para pedir? Entra en <a href="es/comprar-peptidos-panama/">comprar péptidos de investigación en Panamá</a>, mira el <a href="catalog/">catálogo</a> o <a href="verify/">verifica un número de lote</a>.',
    },

    'verify-research-peptide-batch-coa-panama': {
      title: 'Cómo verificar el lote y el COA de un péptido',
      metaTitle: 'Verificar que el COA corresponde a tu vial antes de pagar',
      metaDescription: 'Cómo confirmar que un certificado de análisis pertenece a tu lote: qué revisar en la etiqueta, qué pedir antes de pagar y qué significa que no coincida.',
      category: 'Guía de compra',
      date: '01 ago 2026',
      excerpt: 'Qué muestra un certificado de análisis y cómo confirmar que tu vial es auténtico antes de pagar.',
      imageAlt: 'Ligar el número de lote de un vial al documento que lo describe.',
      body: `
        <p class="lead">Un certificado de análisis (COA) es la forma de confirmar que un péptido de investigación es lo que dice la etiqueta. Esta guía explica qué muestra un COA, cómo se usan la HPLC y la espectrometría de masas para analizar cada lote, y cómo verificar tu vial concreto por su número de lote. Todos los productos son únicamente para uso en investigación de laboratorio.</p>

        <h2>Qué es un certificado de análisis</h2>
        <p>Un COA es un documento emitido por un laboratorio analítico que reporta la identidad, la pureza y la cantidad de un compuesto para un lote específico. En péptidos de investigación, un COA creíble se basa en análisis independientes y no en la palabra del vendedor, y está atado al número de lote impreso en el vial.</p>

        <h2>Qué muestra un COA</h2>
        <ul>
          <li><b>Identidad:</b> la confirmación de que el compuesto corresponde al péptido esperado, normalmente por <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>.</li>
          <li><b>Pureza:</b> el porcentaje del péptido buscado, medido por <a href="article/high-performance-liquid-chromatography-hplc/">cromatografía líquida de alta resolución (HPLC)</a>.</li>
          <li><b>Referencia del lote:</b> el número de lote, una fecha de análisis y los métodos empleados.</li>
        </ul>

        <h2>Cómo verificar tu número de lote</h2>
        <p>En Codex Research, cada lote se analiza en un laboratorio independiente por HPLC y espectrometría de masas, y el COA completo está disponible a solicitud antes de pagar. Para confirmar que un vial es auténtico, ingresa su número de lote en la <a href="verify/">página de verificación</a>: un número válido devuelve el producto y confirma que está registrado. Si un número no aparece, puedes enviarlo al equipo para que lo revise.</p>

        <h2>Comprar en Panamá</h2>
        <p>En Panamá puedes pedir el COA antes de ordenar, pagar con tarjeta o cripto al finalizar la compra, y recibir tu pedido en 1 a 2 horas dentro de la ciudad. La guía completa de <a href="article/buy-research-peptides-panama/">cómo comprar péptidos de investigación en Panamá</a> cubre el envío y el pago en detalle.</p>

        <h2>Empieza por la etiqueta, no por el anuncio</h2>
        <p>La verificación va en una sola dirección: del vial que tienes en la mano hacia el papel. Cada vial de Codex Research lleva un número de lote con el formato CDX-NNNN (por ejemplo, CDX-1017), y esa cadena es la llave de todo lo demás. Léela primero en la etiqueta y después comprueba que esa misma cadena aparece en el certificado que te enviaron. Un COA que no nombra tu lote es un documento sobre otro material, por buenos que se vean los números.</p>

        <h2>Pide el certificado antes de pagar, no después</h2>
        <p>El COA completo está disponible a solicitud antes del pago, y eso cambia lo que puedes hacer con él. Antes de ordenar puedes preguntar qué lote recibirías, pedir el certificado de ese lote en vez de un documento de muestra, y leerlo mientras todavía tienes la opción de no comprar. Después de pagar, ese mismo certificado es solo un registro. El orden importa más que el documento.</p>
        <p>Tres preguntas cubren casi todo: a qué lote pertenece este certificado, con qué métodos se obtuvieron estos números y quién los hizo. Un proveedor que responde las tres por escrito opera distinto de uno que manda una captura de pantalla.</p>

        <h2>Una revisión de un minuto antes de pedir</h2>
        <ul>
          <li><b>Coincidencia de lote:</b> el número del certificado es, carácter por carácter, el de la etiqueta.</li>
          <li><b>Una fecha:</b> el certificado dice cuándo se hizo el análisis, no solo cuándo se creó el archivo.</li>
          <li><b>Métodos con nombre:</b> la HPLC y la espectrometría de masas aparecen identificadas como los procedimientos detrás de las cifras, con resultados numéricos y no con la palabra «cumple».</li>
          <li><b>Un autor:</b> el laboratorio que analizó está identificado y el documento está firmado o es atribuible de alguna forma.</li>
          <li><b>Legibilidad:</b> se pueden leer el encabezado y el cromatograma, no una imagen comprimida de ellos.</li>
          <li><b>Un lote, un documento:</b> el certificado es específico de ese lote, no un archivo único reutilizado en todo el catálogo.</li>
        </ul>
        <p>Qué significa cada uno de esos campos, y la diferencia entre pureza cromatográfica y contenido neto de péptido, está en detalle en <a href="article/how-to-read-a-certificate-of-analysis/">cómo leer un certificado de análisis</a>. Esta guía trata de confirmar que el certificado que tienes delante pertenece al vial que tienes delante.</p>

        <h2>Qué hace que un análisis sea independiente</h2>
        <p>Análisis de terceros significa que el laboratorio que reporta el resultado no es quien vende el material. Esa separación es todo el valor del arreglo, y por eso la identidad del laboratorio pertenece al certificado en vez de describirse en abstracto. Las normas de competencia reconocidas para laboratorios de ensayo están construidas justo sobre esas dos ideas, competencia e imparcialidad, y cuando un laboratorio tiene acreditación, esta aplica a una lista definida de métodos y no a los análisis en general. En Codex Research, cada lote lo analiza un laboratorio independiente por HPLC y espectrometría de masas.</p>

        <h2>Verificar un lote en Panamá</h2>
        <p>La entrega local en la ciudad de Panamá hace más fácil un paso que en otros lados no lo es: puedes comparar la etiqueta impresa contra el certificado en el momento de la entrega, con el vial en la mano y no en una foto. En la práctica el orden útil es pedir el COA antes de ordenar, leerlo, hacer el pedido y confirmar la etiqueta en la entrega. La verificación es la misma en todas partes; la diferencia es que aquí el último paso ocurre cara a cara en vez de después de una cola en aduana.</p>

        <h2>Si el número no coincide</h2>
        <p>Que no coincida no es prueba automática de un lote malo. Los errores de transcripción existen, y un número se puede leer mal en una etiqueta pequeña. La respuesta es la misma en los dos casos: no aceptes una explicación verbal y pide el certificado que lleva exactamente la cadena de tu vial. Si un proveedor no puede producir un documento específico del lote que te envió, el material está sin analizar desde tu lado de la transacción, sea lo que sea que se haya analizado antes. También puedes ingresar el número en la <a href="verify/">página de verificación</a> o enviárselo al equipo para que lo revise.</p>

        <h2>Solo para investigación</h2>
        <p>Todos los productos que vende Codex Research son estrictamente para investigación y desarrollo de laboratorio. No son para consumo humano ni animal, y no pretenden diagnosticar, tratar, curar ni prevenir ninguna enfermedad.</p>
      `,
      faq: [
        { q: '¿Qué es un certificado de análisis (COA)?', a: 'Un COA es un documento de laboratorio que reporta la identidad, la pureza y la cantidad de un compuesto para un lote específico. En péptidos de investigación se basa en análisis independientes por HPLC y espectrometría de masas, y está atado al número de lote del vial.' },
        { q: '¿Cómo verifico un número de lote de Codex Research?', a: 'Ingresa el número de lote impreso en la etiqueta del vial en codexresearchlab.com/es/verify/. Un número válido confirma el producto y que está registrado. El COA completo también está disponible a solicitud antes de pagar.' },
        { q: '¿Qué pureza debería mostrar el COA de un péptido de investigación?', a: 'Los péptidos de investigación suelen verificarse alrededor del 99% de pureza por HPLC, con la identidad confirmada por espectrometría de masas. La cifra exacta aparece en el COA del lote.' },
        { q: '¿Puedo ver el certificado de análisis antes de pagar?', a: 'Sí. El COA completo del lote se envía a solicitud antes del pago. Pregunta qué lote recibirías y pide el certificado de ese lote en concreto, no un documento de muestra, para poder leerlo mientras todavía tienes la opción de no comprar.' },
        { q: '¿Cómo es un número de lote de Codex Research?', a: 'Los números de lote van impresos en la etiqueta del vial con el formato CDX-NNNN (por ejemplo, CDX-1017). Esa cadena es lo que une el vial con su certificado de análisis, así que debe aparecer carácter por carácter en el COA que te envían.' },
        { q: '¿Qué hago si el número de lote no coincide con el COA?', a: 'No aceptes una explicación verbal. Pide el certificado que lleva el número exacto impreso en tu vial, ya que la diferencia puede ser un simple error de transcripción. También puedes ingresar el número en la página de verificación o enviárselo al equipo para que lo revise.' },
      ],
      cta: '<a href="verify/">Verifica un número de lote</a> o mira el <a href="catalog/">catálogo de Codex Research</a>. Cada lote sale con su certificado de análisis.',
    },

    'how-to-read-a-certificate-of-analysis': {
      title: 'Cómo leer un certificado de análisis de péptidos',
      metaTitle: 'Leer un COA de péptidos: pureza, identidad y contenido',
      metaDescription: 'Qué significa cada campo de un COA de péptidos, por qué la pureza cromatográfica no es el contenido neto y las señales de un certificado poco fiable.',
      category: 'Investigación con péptidos',
      date: '03 ago 2026',
      excerpt: 'Qué reporta un certificado de análisis, campo por campo.',
      imageAlt: 'Campo por campo: lote, pureza, identidad, y las líneas que un documento completo también trae.',
      body: `
        <p class="lead">Un certificado de análisis, o COA, convierte lo que dice una etiqueta en algo comprobable. El número de pureza se lleva toda la atención, y es el resto del documento el que le da sentido.</p>

        <h2>Número de lote</h2>
        <p>Cada COA está atado a un lote específico, y el número de lote es el vínculo entre el papel y el vial que tienes en la mano. Si el número del documento no coincide con el de la etiqueta, el COA no describe tu material. Ese es también el número que usarías para <a href="verify/">verificar que un lote</a> es auténtico.</p>

        <h2>Pureza</h2>
        <p>La pureza suele reportarse como un porcentaje obtenido por <a href="article/peptide-purity-hplc-explained/">HPLC</a>, muchas veces cercano al 99 por ciento. Te dice qué parte de la muestra es el péptido buscado frente a todo lo demás que detectó el método. Una cifra alta con un resultado limpio es buena señal, pero recuerda que la pureza por sí sola no confirma qué péptido es.</p>

        <h2>Identidad</h2>
        <p>La identidad es la otra mitad del cuadro, y normalmente se confirma por <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>. El COA reporta la masa medida y la compara con la masa esperada para ese péptido. Cuando las dos coinciden, tienes evidencia de que el compuesto es lo que dice ser, y no solo de que está puro.</p>

        <h2>Fecha de análisis y métodos</h2>
        <p>Un COA debe decir cuándo se hicieron los análisis y qué métodos se usaron, típicamente HPLC y espectrometría de masas. La fecha importa porque ata los resultados a un momento en la vida de ese lote. Los métodos importan porque te dicen cómo se produjeron los números, en vez de pedirte que los creas.</p>

        <h2>Leerlo completo</h2>
        <p>Leído como un todo, un buen COA responde tres preguntas: qué lote es este, qué tan puro está y si es la molécula correcta. Si un documento solo responde una, está incompleto. En Codex Research el COA completo está disponible a solicitud antes de pagar, y cualquier vial se puede revisar por su número de lote.</p>

        <h2>Los demás campos que lleva un COA completo</h2>
        <p>Lote, pureza e identidad son los titulares, pero un certificado a fondo reporta más de tres líneas. Según el compuesto, también puedes ver:</p>
        <ul>
          <li><b>Nombre e identificadores del producto,</b> incluido un <a href="article/cas-numbers-explained/">número CAS</a> cuando existe, para que el documento no se pueda confundir con un compuesto parecido.</li>
          <li><b>Aspecto:</b> una descripción cualitativa breve del material, casi siempre un polvo liofilizado.</li>
          <li><b>Contenido neto de péptido:</b> qué parte del polvo es péptido, y no sal y agua.</li>
          <li><b>Contenido de agua,</b> normalmente por valoración Karl Fischer, porque los péptidos liofilizados absorben humedad.</li>
          <li><b>Contenido de contraión:</b> trifluoroacetato o acetato que queda de la purificación.</li>
          <li><b>Disolventes residuales:</b> trazas de los disolventes usados en la síntesis y la purificación.</li>
          <li><b>Endotoxina bacteriana,</b> reportada cuando el trabajo de laboratorio previsto es sensible a ella, como los ensayos celulares.</li>
          <li><b>Métodos, fecha y firma:</b> qué procedimiento produjo cada número, cuándo y quién responde por él.</li>
        </ul>
        <p>No todos los certificados llevan todas las líneas. Lo que importa es que las que sí lleva sean números atados a un método con nombre, no adjetivos.</p>

        <h2>La pureza cromatográfica no es el contenido neto de péptido</h2>
        <p>Esta es la confusión más común al leer un COA de péptidos. La pureza cromatográfica hace una pregunta sobre los picos: de todo lo que detectó el método, ¿qué proporción era el péptido buscado? El contenido neto de péptido hace una pregunta sobre el polvo: del material que pesaste, ¿qué proporción es péptido siquiera?</p>
        <p>La diferencia es real. Los péptidos purificados por HPLC de fase reversa se aíslan normalmente como sales, así que parte del polvo es contraión y parte es agua absorbida. Un lote puede tener 99 por ciento de pureza por HPLC y estar bastante por debajo del 99 por ciento de péptido en masa, sin contradicción entre las dos cifras. Miden cosas distintas, y un certificado que reporta solo una no está equivocado: está incompleto.</p>

        <h2>Leer el cromatograma</h2>
        <p>Si el COA incluye el cromatograma y no solo el porcentaje, mira la traza y no únicamente el número que tiene al lado. Un pico alto y simétrico sobre una línea base plana es la imagen que quieres. Los picos pequeños cerca del principal son comunes en síntesis de péptidos y suelen corresponder a especies muy relacionadas, como secuencias truncadas o modificadas que la columna separa apenas. Un pico secundario muy pegado al principal te dice que el método tuvo que esforzarse para resolverlo, y por eso las condiciones del método pertenecen al certificado.</p>

        <h2>Lo que aporta la espectrometría de masas y la HPLC no puede</h2>
        <p>La HPLC separa y cuantifica; no nombra. Dos compuestos distintos pueden eluir a tiempos parecidos bajo las mismas condiciones, y un detector UV reporta los dos como picos sin opinar. La espectrometría de masas responde lo que la cromatografía deja abierto midiendo la masa directamente, de modo que el valor observado se puede comparar con el calculado a partir de la secuencia, y los enfoques en tándem fragmentan la molécula para respaldar la secuencia misma. Por eso una pureza sin método de identidad es medio documento.</p>

        <h2>Quién lo firma, y por qué importa</h2>
        <p>Un certificado es una afirmación de quien lo emite, así que el análisis independiente importa porque separa a quien hace la afirmación de quien vende el material. Los laboratorios que trabajan bajo una norma de competencia reconocida se evalúan contra criterios definidos de competencia e imparcialidad, y la acreditación cubre una lista específica de métodos, no los análisis en general. La pregunta útil no es solo qué dice el número, sino quién lo produjo y con qué método.</p>

        <h2>Señales de alarma en un certificado</h2>
        <ul>
          <li><b>Sin número de lote,</b> o con uno que no coincide con el vial: el documento describe el material de otro.</li>
          <li><b>Sin fecha de análisis,</b> con lo que los resultados no se pueden atar a un punto en la vida de ese lote.</li>
          <li><b>Sin métodos con nombre.</b> «Pureza: 99%» sin un procedimiento detrás es una declaración, no un resultado.</li>
          <li><b>Sin identidad ni firma del laboratorio,</b> lo que deja el documento sin autor que responda por él.</li>
          <li><b>Una imagen de baja resolución</b> en la que no se leen los ejes del cromatograma ni el encabezado.</li>
          <li><b>El mismo documento para todos los productos,</b> que significa que no es específico de ningún lote.</li>
        </ul>
        <p>En Codex Research cada lote lo analiza un laboratorio independiente por HPLC y espectrometría de masas, el certificado es específico de ese lote, y el documento completo se envía a solicitud antes de pagar. El número de lote de la etiqueta sigue el formato CDX-NNNN (por ejemplo, CDX-1017), y esa cadena es lo que une el vial con su papelería. Para revisar un vial que ya tienes, mira nuestra guía de <a href="article/verify-research-peptide-batch-coa-panama/">cómo verificar un lote y su COA</a>.</p>

        <h2>Solo para investigación</h2>
        <p>Todos los productos que vende Codex Research son estrictamente para investigación y desarrollo de laboratorio. No son para consumo humano ni animal, y no pretenden diagnosticar, tratar, curar ni prevenir ninguna enfermedad.</p>
      `,
      faq: [
        { q: '¿Qué lleva un certificado de análisis de péptidos?', a: 'Un COA reporta el número de lote, la pureza (normalmente por HPLC), la identidad (normalmente por espectrometría de masas), la fecha de análisis y los métodos empleados. Juntos dicen qué lote es, qué tan puro está y si es la molécula correcta.' },
        { q: '¿Por qué importa el número de lote de un COA?', a: 'El número de lote une el documento con un vial específico. Si el número del COA no coincide con el de la etiqueta, el certificado no describe tu material. Es también el número que se usa para verificar que un lote es auténtico.' },
        { q: '¿Basta con el porcentaje de pureza?', a: 'No. La pureza te dice qué parte de la muestra es un componente principal, pero no que ese componente sea el péptido correcto. Un COA completo acompaña la pureza por HPLC con una comprobación de identidad por espectrometría de masas.' },
        { q: '¿Cuál es la diferencia entre pureza por HPLC y contenido neto de péptido?', a: 'La pureza por HPLC es la proporción de los picos detectados que corresponde al péptido buscado. El contenido neto de péptido es la proporción del polvo que es péptido y no contraión ni agua absorbida. Un lote puede tener 99 por ciento de pureza por HPLC y estar muy por debajo del 99 por ciento de péptido en masa: las dos cifras miden cosas distintas.' },
        { q: '¿Por qué un COA lista contraiones como TFA o acetato?', a: 'Los péptidos purificados por HPLC de fase reversa se aíslan normalmente como sales, así que queda trifluoroacetato o acetato unido al material. Se reporta porque es parte del polvo que se pesa y porque es un residuo conocido del proceso de purificación.' },
        { q: '¿Cuáles son las señales de un certificado de análisis poco fiable?', a: 'Sin número de lote, o con uno que no coincide con el vial; sin fecha de análisis; sin métodos de ensayo con nombre; sin laboratorio identificado ni firma; una imagen con resolución demasiado baja para leer el cromatograma; o el mismo documento reutilizado en todos los productos en vez de ser específico de un lote.' },
      ],
      cta: '<a href="verify/">Verifica un número de lote</a> o mira el <a href="catalog/">catálogo de Codex Research</a>. Cada lote sale con su certificado de análisis.',
    },

    'mass-spectrometry-peptide-research': {
      title: 'La espectrometría de masas en la investigación con péptidos',
      metaTitle: 'Espectrometría de masas: confirmar qué es un péptido',
      metaDescription: 'Cómo se usa la espectrometría de masas para confirmar la identidad de un péptido, detectar modificaciones y evaluar la pureza: MALDI-TOF, ESI y LC-MS/MS.',
      category: 'Técnicas analíticas',
      date: '11 oct 2025',
      excerpt: 'Cómo esta técnica confirma la identidad, la masa molecular y la pureza de cada compuesto.',
      imageAlt: 'Equipo de espectrometría de masas usado para analizar péptidos de investigación',
      related: ['high-performance-liquid-chromatography-hplc', 'how-to-read-a-certificate-of-analysis', 'peptide-purity-hplc-explained'],
      body: `
        <p class="lead">La espectrometría de masas mide la relación masa-carga de moléculas ionizadas. En trabajo con péptidos responde una pregunta que ninguna cifra de pureza responde por sí sola: ¿es esta la molécula correcta? Un cromatograma dice cuánto hay de una cosa. Un espectro de masas dice cuánto pesa esa cosa y, por tanto, qué es probablemente.</p>

        <h2>Qué mide el instrumento</h2>
        <p>Un espectrómetro de masas hace tres cosas en secuencia. Convierte moléculas neutras en iones, separa esos iones según su relación masa-carga, y los cuenta. La salida es un espectro: intensidad frente a m/z. Nada en ese proceso pesa una molécula directamente. Lo que se mide es cómo se comporta un ion en un campo eléctrico o magnético, y de ahí se infiere la masa. <a class="cite" href="https://doi.org/10.1038/nature01511" target="_blank" rel="noopener nofollow">(Referencia: Aebersold y Mann, 2003)</a></p>

        <h2>Cómo un péptido se convierte en ion</h2>
        <p>Los péptidos son grandes, frágiles y no volátiles, lo que los hizo muy difíciles de analizar hasta que dos métodos de ionización resolvieron el problema a finales de los ochenta.</p>
        <ul>
          <li><b>Ionización por electrospray (ESI).</b> La muestra se pulveriza desde una aguja fina a alto voltaje. El disolvente se evapora de las gotas hasta dejar iones desnudos en fase gaseosa. Como trabaja desde disolución, el ESI se acopla directo a un cromatógrafo de líquidos. <a class="cite" href="https://doi.org/10.1126/science.2675315" target="_blank" rel="noopener nofollow">(Referencia: Fenn et al., 1989)</a></li>
          <li><b>Desorción/ionización láser asistida por matriz (MALDI).</b> La muestra se cocristaliza con una matriz que absorbe luz y recibe un pulso láser. La matriz absorbe la energía y arrastra al péptido consigo a la fase gaseosa. <a class="cite" href="https://doi.org/10.1021/ac00171a028" target="_blank" rel="noopener nofollow">(Referencia: Karas y Hillenkamp, 1988)</a></li>
        </ul>
        <p>La diferencia práctica aparece en el espectro. El MALDI suele producir iones de una sola carga, así que el espectro es simple de leer. El ESI produce una serie de iones multicargados de la misma molécula, y el software combina esa serie en una masa. Un espectro con varios picos igualmente espaciados no son varios compuestos: es uno solo llevando distinto número de protones.</p>

        <h2>Masa monoisotópica y masa promedio</h2>
        <p>Un certificado que reporta una masa observada está reportando uno de dos números distintos, y no son intercambiables.</p>
        <p>La <b>masa monoisotópica</b> se calcula con el isótopo más ligero y abundante de cada elemento: carbono-12, hidrógeno-1, nitrógeno-14, oxígeno-16. La <b>masa promedio</b> pondera cada elemento por la abundancia natural de todos sus isótopos. Para un péptido pequeño las dos difieren en bastante menos de un dalton. A medida que la molécula crece la brecha se abre, porque hay más átomos de carbono disponibles para cargar un isótopo pesado. <a class="cite" href="https://doi.org/10.1016/1044-0305(95)00017-8" target="_blank" rel="noopener nofollow">(Referencia: Senko et al., 1995)</a></p>
        <p>Por eso una masa observada que queda a un dalton de lo esperado no es automáticamente un problema. Puede ser la misma molécula reportada con el otro criterio. Y por eso también un buen certificado dice qué masa está citando.</p>

        <h2>Las configuraciones que verás nombradas</h2>
        <p>Tres combinaciones cubren casi todo el análisis de péptidos, y un certificado suele nombrar una.</p>
        <ul>
          <li><b>MALDI-TOF.</b> Ionización láser con analizador de tiempo de vuelo, que separa iones por el tiempo que tardan en recorrer una distancia fija. Rápido, tolerante a sales y adecuado para confirmar la masa de una muestra purificada.</li>
          <li><b>ESI-MS.</b> Electrospray alimentando el analizador directo desde disolución. La elección natural cuando la muestra ya está en líquido.</li>
          <li><b>LC-MS/MS.</b> Cromatografía líquida delante, espectrometría en tándem detrás. El cromatógrafo separa, el primer analizador selecciona un componente y el segundo mide sus fragmentos. Es la configuración que da separación, masa y evidencia de secuencia en una sola corrida.</li>
        </ul>

        <h2>Espectrometría en tándem y la secuencia</h2>
        <p>Medir la molécula entera confirma su masa. No confirma el orden de los residuos, y dos secuencias distintas construidas con los mismos aminoácidos pesan exactamente igual. La espectrometría en tándem cierra ese hueco: selecciona un ion, lo rompe y mide los pedazos.</p>
        <p>Los péptidos tienden a romper por el esqueleto amida, produciendo dos familias de fragmentos: una serie que conserva el extremo amino y otra que conserva el carboxilo. La convención para nombrarlos es estándar desde 1984, y la diferencia entre fragmentos consecutivos corresponde al residuo que se perdió. Leyendo la serie, la secuencia aparece sola. <a class="cite" href="https://doi.org/10.1002/bms.1200111109" target="_blank" rel="noopener nofollow">(Referencia: Roepstorff y Fohlman, 1984)</a> <a class="cite" href="https://doi.org/10.1126/science.1124619" target="_blank" rel="noopener nofollow">(Referencia: Domon y Aebersold, 2006)</a></p>

        <h2>Con qué se combina, y por qué</h2>
        <p>La <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> separa y cuantifica, pero no nombra. Dos compuestos pueden salir de la columna a tiempos parecidos y un detector UV reporta ambos como picos, sin opinión. La espectrometría de masas nombra, pero por sí sola no dice qué proporción representa cada componente. Juntas como LC-MS cubren el punto ciego de la otra, y por eso un <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a> completo trae un resultado de cada una. <a class="cite" href="https://doi.org/10.1146/annurev-bioeng-061008-124934" target="_blank" rel="noopener nofollow">(Referencia: Yates et al., 2009)</a></p>

        <h2>Qué no puede decirte</h2>
        <ul>
          <li><b>Los isómeros pesan igual.</b> Leucina e isoleucina tienen masas de residuo idénticas, así que una medición estándar no distingue secuencias que solo se diferencien en cambiar una por otra.</li>
          <li><b>La estereoquímica es invisible.</b> Un aminoácido D y su contraparte L pesan lo mismo. Nada en el espectro los separa.</li>
          <li><b>La altura del pico no es concentración.</b> Moléculas distintas ionizan con eficiencia distinta, así que la intensidad no se traduce en cantidad sin un patrón de referencia.</li>
          <li><b>Ve lo que se ioniza.</b> Sales, agua y contraiones que forman parte del polvo pesado no aparecen como aparece el péptido.</li>
        </ul>

        <h2>Dónde encaja en el registro de un lote</h2>
        <p>Para un péptido sintético la secuencia habitual es directa. Se fabrica el material, se purifica, una corrida cromatográfica establece qué proporción es el objetivo, y una medición de masa establece que el objetivo es la molécula pretendida. Los dos resultados, ligados a un número de lote, son lo que convierte una etiqueta en algo comprobable. Puedes consultar el lote de un vial en nuestra <a href="verify/">página de verificación</a>. <a class="cite" href="https://doi.org/10.1038/nature19949" target="_blank" rel="noopener nofollow">(Referencia: Aebersold y Mann, 2016)</a></p>
      `,
      faq: [
        {
          "q": "¿Qué mide la espectrometría de masas en péptidos?",
          "a": "La relación masa-carga de moléculas ionizadas. De ahí se infiere la masa molecular y se compara con la calculada a partir de la secuencia pretendida, que es lo que confirma la identidad."
        },
        {
          "q": "¿Qué diferencia hay entre MALDI y ESI?",
          "a": "El MALDI ioniza desde una matriz sólida golpeada por láser y suele dar iones de una sola carga, así que el espectro es simple. El ESI ioniza desde disolución y da una serie de iones multicargados que el software combina en una masa. El ESI se acopla directo a cromatografía líquida; el MALDI no."
        },
        {
          "q": "¿Qué diferencia hay entre masa monoisotópica y promedio?",
          "a": "La monoisotópica usa el isótopo más ligero y abundante de cada elemento. La promedio pondera cada elemento por la abundancia natural de todos sus isótopos. Difieren en bastante menos de un dalton en péptidos pequeños y la brecha se abre al crecer la molécula, así que el certificado debería decir cuál reporta."
        },
        {
          "q": "¿Puede confirmar la secuencia de un péptido?",
          "a": "La espectrometría en tándem sí. Selecciona un ion, lo fragmenta por el esqueleto y mide los pedazos. La diferencia entre fragmentos consecutivos corresponde al residuo perdido, así que la secuencia se lee a lo largo de la serie."
        },
        {
          "q": "¿Qué no detecta la espectrometría de masas?",
          "a": "No distingue isómeros de igual masa, como leucina e isoleucina, y no ve la estereoquímica. La intensidad del pico tampoco se traduce en concentración, porque moléculas distintas ionizan con distinta eficiencia."
        },
        {
          "q": "¿Por qué la pureza sin medición de masa está incompleta?",
          "a": "La pureza cromatográfica reporta cuánto del material detectado es un componente principal, pero no establece que ese componente sea la molécula correcta. Emparejar pureza con una medición de identidad es lo que completa un certificado."
        }
      ],
      cta: 'Mira nuestra gama de <a href="catalog/">péptidos de investigación</a>, analizados por espectrometría de masas y HPLC para verificar su pureza.',
    },

    'high-performance-liquid-chromatography-hplc': {
      title: '¿Qué es la cromatografía líquida de alta resolución (HPLC)?',
      metaTitle: 'HPLC: cómo se produce el número de pureza de un péptido',
      metaDescription: 'Guía clara de la cromatografía líquida de alta resolución (HPLC): cómo separa y cuantifica compuestos, y por qué es clave en la investigación con péptidos.',
      category: 'Técnicas analíticas',
      date: '29 ago 2025',
      excerpt: 'El método estándar para verificar la pureza de un lote antes de enviarlo, explicado paso a paso.',
      imageAlt: 'Sistema de cromatografía líquida de alta resolución HPLC separando muestras de péptidos',
      related: ['mass-spectrometry-peptide-research', 'peptide-purity-hplc-explained', 'how-to-read-a-certificate-of-analysis'],
      body: `
        <p class="lead">De la cromatografía líquida de alta resolución sale la cifra de pureza. Una bomba empuja la muestra por una columna empacada, los componentes viajan a velocidades distintas y un detector los registra al salir. El número de un certificado es una medición de ese registro, así que vale tanto como las condiciones que lo produjeron.</p>

        <h2>Cómo ocurre la separación</h2>
        <p>La columna va empacada con una fase estacionaria. Un disolvente, la fase móvil, se impulsa a través de ella a alta presión arrastrando la muestra. Cada componente interactúa con la fase estacionaria en distinto grado, así que cada uno pasa retenido un tiempo distinto. Ese tiempo es el tiempo de retención, y es lo que separa un compuesto de otro. <a class="cite" href="https://doi.org/10.1002/0471973106" target="_blank" rel="noopener nofollow">(Referencia: Dong, 2006)</a></p>

        <h2>Para péptidos casi siempre es fase reversa</h2>
        <p>La palabra reversa es histórica. La fase estacionaria es apolar, normalmente sílice con cadenas alquílicas C18 enlazadas, y la fase móvil es polar. Los péptidos se pegan a la superficie apolar y se van despegando al subir gradualmente la proporción de disolvente orgánico, típicamente acetonitrilo. Las secuencias más hidrofóbicas aguantan más, así que salen más tarde. <a class="cite" href="https://doi.org/10.1002/9780470508183" target="_blank" rel="noopener nofollow">(Referencia: Snyder et al., 2009)</a></p>

        <h2>Por qué hay ácido en la fase móvil</h2>
        <p>Los métodos para péptidos suelen llevar una pequeña cantidad de ácido trifluoroacético. Cumple dos funciones: mantiene el pH bajo para que los grupos ionizables queden en un estado consistente, y actúa como agente de par iónico asociándose a los sitios básicos protonados del péptido. El resultado son picos más afilados y mejor separación de secuencias parecidas. El efecto depende de la concentración y del ácido usado, y se ha estudiado de forma sistemática. <a class="cite" href="https://doi.org/10.1016/j.chroma.2005.02.047" target="_blank" rel="noopener nofollow">(Referencia: Shibue et al., 2005)</a></p>
        <p>Esto conecta con algo que aparece después en el certificado. Ese mismo trifluoroacetato puede quedarse unido al material tras la purificación, que es la razón de que un péptido se aísle normalmente como sal y de que parte del polvo que pesas sea contraión en vez de péptido.</p>

        <h2>Gradiente y corrida isocrática</h2>
        <p>Un método isocrático mantiene constante la composición de la fase móvil durante toda la corrida. Un método en gradiente la cambia, subiendo la proporción orgánica de forma sostenida. Los péptidos casi siempre se corren en gradiente, porque una composición fija que libere una secuencia a tiempo retendrá otra demasiado, o arrastrará ambas juntas sin separación alguna.</p>
        <p>La forma de ese gradiente es una variable real. Uno suave dispersa los picos y resuelve especies que uno pronunciado funde en uno solo. Dos laboratorios pueden analizar el mismo lote, reportar con honestidad y llegar a cifras de pureza distintas porque uno le dio más espacio a la separación. Es otra razón por la que las condiciones van junto al número.</p>

        <h2>Qué ve el detector</h2>
        <p>Casi todo el trabajo con péptidos usa detección ultravioleta, y la longitud de onda no es arbitraria.</p>
        <ul>
          <li><b>Cerca de 214 nm</b> absorbe el propio enlace amida. Todo péptido tiene enlaces amida, así que esa longitud de onda detecta prácticamente cualquier secuencia.</li>
          <li><b>A 280 nm</b> la absorbancia viene sobre todo de las cadenas laterales aromáticas, triptófano y tirosina. Un péptido sin residuos aromáticos es casi invisible ahí.</li>
        </ul>
        <p>La consecuencia vale la pena conocerla: dos corridas de la misma muestra a longitudes de onda distintas pueden dar cifras de pureza distintas, porque no están detectando lo mismo con la misma sensibilidad.</p>

        <h2>Qué muestra la traza</h2>
        <p>Si el certificado incluye el cromatograma, míralo. Un pico alto y simétrico sobre una línea base plana es la imagen que quieres. Picos pequeños cerca del principal son comunes en síntesis y suelen corresponder a especies emparentadas, como secuencias truncadas o modificadas. Un hombro en el pico principal significa que el método resolvió eso con poco margen, que es justo por qué las condiciones del método pertenecen al documento. <a class="cite" href="https://doi.org/10.1002/0470087951" target="_blank" rel="noopener nofollow">(Referencia: Kazakevich y LoBrutto, 2006)</a></p>

        <h2>El porcentaje de área no es porcentaje en masa</h2>
        <p>Esta es la lectura equivocada más común de un resultado de HPLC. La pureza se reporta normalmente como el área del pico objetivo dividida entre el área total de los picos detectados. Responde una pregunta sobre el material detectado: de todo lo que vio este método, ¿qué proporción era el objetivo?</p>
        <p>No responde qué proporción del polvo es péptido. El contraión, el agua absorbida y cualquier cosa sin cromóforo a la longitud de onda elegida no entran en ese cálculo. Un lote puede ser 99 por ciento puro por área y estar bastante por debajo de 99 por ciento de péptido en masa, sin contradicción entre las dos cifras. Miden cosas distintas, y por eso un <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a> completo reporta ambas.</p>

        <h2>Las condiciones son parte del resultado</h2>
        <p>Una cifra de pureza sin método detrás es una afirmación, no una medición. La columna, el gradiente, el flujo, la longitud de onda y la duración cambian el número que sale. Reportadas juntas, permiten que otra persona repita el análisis. Reportado solo, el porcentaje pide que se le crea. Las guías sobre validación de procedimientos analíticos existen precisamente porque un resultado es inseparable del procedimiento que lo produjo. <a class="cite" href="https://doi.org/10.1201/b12039" target="_blank" rel="noopener nofollow">(Referencia: Swartz y Krull, 2012)</a></p>

        <h2>Qué no puede hacer la HPLC</h2>
        <ul>
          <li><b>Separa, no identifica.</b> Un detector reporta un pico a un tiempo de retención. No tiene opinión sobre qué molécula es, y por eso la pureza se acompaña de <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>.</li>
          <li><b>Algo puede esconderse bajo el pico.</b> Una impureza que sale a la vez que el objetivo se cuenta como objetivo. Las secuencias de deleción, que difieren en un solo residuo, son las candidatas habituales.</li>
          <li><b>La respuesta no es uniforme.</b> Dos compuestos a la misma concentración no dan necesariamente picos de la misma área.</li>
        </ul>
        <p>Usada para lo que sabe hacer, sigue siendo la forma estándar de establecer qué proporción de un lote es lo que dice ser, y ese número es uno de los dos resultados que deberías esperar ligados a un lote en cualquier <a href="verify/">vial que puedas comprobar</a>.</p>
      `,
      faq: [
        {
          "q": "¿Para qué se usa la HPLC con péptidos?",
          "a": "Separa los componentes de una muestra y los cuantifica, que es como se produce una cifra de pureza. Es el método estándar para establecer qué proporción de un lote es el compuesto buscado."
        },
        {
          "q": "¿Qué es el tiempo de retención?",
          "a": "Lo que tarda un compuesto en recorrer la columna y llegar al detector. Los componentes que interactúan más con la fase estacionaria quedan retenidos más tiempo, y esa diferencia es lo que los separa."
        },
        {
          "q": "¿Por qué se usa fase reversa para péptidos?",
          "a": "La fase estacionaria es apolar y la móvil polar, así que los péptidos se unen a la columna y se liberan al subir la proporción de disolvente orgánico. Las secuencias más hidrofóbicas salen más tarde, lo que separa bien péptidos parecidos."
        },
        {
          "q": "¿Por qué se añade ácido trifluoroacético?",
          "a": "Mantiene el pH bajo para que los grupos ionizables queden en un estado consistente y actúa como par iónico afinando los picos. Ese mismo trifluoroacetato puede quedarse después con el material como contraión."
        },
        {
          "q": "¿Importa si se detecta a 214 o a 280 nm?",
          "a": "Sí. A 214 nm absorbe el enlace amida, así que se detecta prácticamente cualquier péptido. A 280 nm la señal viene de triptófano y tirosina, de modo que un péptido sin aromáticos es casi invisible. La misma muestra puede dar cifras distintas."
        },
        {
          "q": "¿99 por ciento por HPLC es 99 por ciento de péptido?",
          "a": "No. La pureza por HPLC es el área del pico objetivo sobre el área total detectada. El contenido neto de péptido es la proporción del polvo pesado que es péptido y no contraión ni agua. Un lote puede ser 99 por ciento puro por área y bastante menos por masa."
        }
      ],
      cta: 'Mira los <a href="catalog/">péptidos de investigación</a> verificados por HPLC con pureza superior al 98 por ciento.',
    },

    'bacteriostatic-water-for-peptide-reconstitution': {
      title: 'Agua bacteriostática para reconstituir péptidos',
      metaTitle: 'Agua bacteriostática: alcohol bencílico, pH y solubilidad',
      metaDescription: 'Agua bacteriostática para reconstituir péptidos: contenido de alcohol bencílico, pH, cómo elegir disolvente y cuánto dura una disolución.',
      category: 'Investigación con péptidos',
      date: '03 ago 2026',
      excerpt: 'Qué separa el agua bacteriostática del agua estéril común, y por qué los laboratorios la eligen primero.',
      imageAlt: 'Vial de agua bacteriostática usado para reconstituir péptidos de investigación',
      related: ['how-to-read-a-certificate-of-analysis', 'what-is-bpc-157'],
      body: `
        <p class="lead">Cuando un péptido liofilizado necesita un líquido en el que disolverse, la respuesta por defecto en la mayoría de los laboratorios es el agua bacteriostática. No es la única opción, pero es la primera a la que se recurre, y hay una razón concreta. La versión corta: permite usar un vial más de una vez.</p>

        <h2>¿Qué es el agua bacteriostática?</h2>
        <p>El agua bacteriostática es agua estéril que contiene una pequeña cantidad de alcohol bencílico, normalmente alrededor del 0,9 por ciento, añadido como conservante. La palabra «bacteriostático» describe lo que hace ese conservante: frena o detiene el crecimiento bacteriano, en vez de matarlo todo de golpe. Ese único ingrediente es toda la diferencia con el agua para inyección común.</p>

        <h2>La especificación, en números</h2>
        <p>La etiqueta USP del producto es específica sobre lo que contiene el líquido:</p>
        <table>
          <tr><th>Atributo</th><th>Valor</th></tr>
          <tr><td>Conservante</td><td>Alcohol bencílico, 0,9% (9 mg/mL)</td></tr>
          <tr><td>pH</td><td>5,7 (rango de 4,5 a 7,0)</td></tr>
          <tr><td>Presentación</td><td>Estéril, apirógena, envase multidosis</td></tr>
          <tr><td>Otros aditivos</td><td>Ninguno</td></tr>
        </table>
        <p>El pH ligeramente ácido es un detalle que a veces importa, porque cae dentro del rango en el que la desamidación, la vía de degradación más común de los péptidos en agua, avanza más despacio.</p>

        <h2>En qué se diferencia del agua estéril</h2>
        <p>El agua estéril para inyección es exactamente eso, agua sin nada añadido, y está pensada para un solo uso. Una vez abierta no tiene conservante que contenga la contaminación. El agua bacteriostática, por el alcohol bencílico, tolera que se entre en ella más de una vez a lo largo de un tiempo, y por eso encaja con un vial multidosis de investigación del que se extrae repetidamente. Para péptidos que se estudian durante días o semanas, esa reutilización es la ventaja práctica.</p>

        <h2>Por qué los laboratorios la usan con péptidos</h2>
        <p>El agua bacteriostática encaja bien con el trabajo de laboratorio: disuelve limpiamente la mayoría de los péptidos, el conservante permite varias extracciones de un mismo vial, y está ampliamente disponible en volúmenes estándar. Conviene saber además que el alcohol bencílico cuenta como una clase de <a href="article/excipients-in-peptides/">excipiente</a>, un ingrediente inactivo que sostiene la formulación sin ser el compuesto activo.</p>

        <h2>Qué es reconstituir, como operación de laboratorio</h2>
        <p>Reconstituir es disolver una masa conocida de sólido liofilizado en un volumen medido de disolvente, de modo que el resultado sea una disolución de concentración conocida. La aritmética es masa dividida entre volumen, y nada más:</p>
        <table>
          <tr><th>Sólido en el vial</th><th>Disolvente añadido</th><th>Concentración resultante</th></tr>
          <tr><td>5 mg</td><td>1,00 mL</td><td>5 mg/mL</td></tr>
          <tr><td>5 mg</td><td>2,00 mL</td><td>2,5 mg/mL</td></tr>
          <tr><td>10 mg</td><td>2,00 mL</td><td>5 mg/mL</td></tr>
          <tr><td>10 mg</td><td>5,00 mL</td><td>2 mg/mL</td></tr>
        </table>
        <p>Dos cosas hacen esa aritmética menos trivial de lo que parece. La primera es que la torta liofilizada ocupa volumen propio, así que el volumen final de la disolución no es exactamente el volumen de disolvente añadido; para trabajos donde la concentración tiene que ser exacta y no aproximada, la disolución se enrasa a una marca en vez de añadir un volumen nominal. La segunda es que la masa impresa en la etiqueta es la masa de sólido, no la masa de péptido. El material purificado por cromatografía de fase reversa se aísla como sal y arrastra un contraión más agua residual, así que el contenido neto de péptido del polvo suele estar bastante por debajo del 100 por ciento y se reporta por lote en el <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a>. Una concentración calculada solo con la masa de la etiqueta es una cifra nominal.</p>

        <h2>Elegir disolvente</h2>
        <p>El agua bacteriostática es la opción por defecto porque la mayoría de los péptidos cortos con un número razonable de residuos cargados se disuelven en ella con facilidad, pero es un valor por defecto, no una regla. Los fabricantes de péptidos dan la misma orientación general: los péptidos básicos se toman normalmente en una pequeña cantidad de disolvente ácido, como ácido acético diluido, y luego se diluyen; los péptidos ácidos, en una pequeña cantidad de disolvente básico, como amoniaco acuoso al 0,1 por ciento, y luego se diluyen; las secuencias marcadamente hidrofóbicas pueden necesitar un disolvente orgánico como DMSO, DMF o acetonitrilo antes de cualquier dilución acuosa. Prueba primero con una porción pequeña en vez de comprometer el vial entero, y revisa el disolvente que sugiere la hoja de datos analíticos del propio lote. Si el material tarda en disolverse, unos minutos de sonicación en baño de agua pueden ayudar, aunque conviene evitar calentar en exceso.</p>

        <h2>El conservante no es inerte</h2>
        <p>El alcohol bencílico es el conservante antimicrobiano más usado en formulaciones proteicas multidosis, y su efecto sobre la molécula disuelta se ha estudiado de forma directa. Los conservantes de esta clase favorecen el desplegamiento parcial, y el desplegamiento parcial es lo que dispara la agregación; en una comparación publicada, la tendencia a inducir agregación fue m-cresol &gt; fenol &gt; alcohol bencílico &gt; fenoxietanol &gt; clorobutanol. El alcohol bencílico está por tanto en la mitad de ese rango, no en el extremo inocuo. Para trabajos donde la agregación o una caracterización física exacta son el objetivo, el agua estéril común o un tampón definido pueden ser mejor diluyente, y sea cual sea el elegido debe anotarse junto con la concentración, porque el diluyente forma parte de la condición experimental.</p>

        <h2>Cuánto dura una disolución reconstituida</h2>
        <p>Mucho menos que el sólido seco, y por razones químicas más que microbianas. Las vías de degradación que dominan en agua son la desamidación de las cadenas laterales de asparagina y glutamina, más rápida a pH neutro y alcalino y más lenta alrededor de pH 3 a 6; la hidrólisis del esqueleto, catalizada por ácido y especialmente notable en las uniones Asp-Gly y Asp-Pro; y la oxidación de metionina, histidina, lisina, triptófano y tirosina. Todas se aceleran con la temperatura. Un conservante no hace nada contra ninguna de ellas, y por eso la vida útil de un péptido en disolución es corta comparada con la del mismo péptido liofilizado.</p>
        <p>Las consecuencias prácticas son las que publican los fabricantes: repartir la disolución en alícuotas en vez de volver una y otra vez al mismo vial, mantener esas alícuotas congeladas por debajo de unos quince grados bajo cero, evitar ciclos repetidos de congelación y descongelación, y tratar el almacenamiento prolongado en disolución como algo que hay que diseñar, no algo en lo que confiar, sobre todo en secuencias que contienen asparagina, glutamina, cisteína, metionina o triptófano.</p>

        <h2>Manejar el vial seco antes de añadir nada</h2>
        <p>Los péptidos liofilizados son higroscópicos, así que el orden de los pasos importa. Un vial sacado del frío debe alcanzar la temperatura ambiente dentro de un desecador antes de abrirlo, para que no condense humedad sobre la torta, y después hay que pesarlo rápido y volver a cerrarlo bien. Todo lo que entre en el vial a partir de ahí, disolvente incluido, pasa a formar parte del sistema, y ese es todo el argumento a favor de un diluyente conservado cuando se va a entrar en un envase más de una vez.</p>

        <h2>Manejo y conservación</h2>
        <p>Igual que los péptidos que disuelve, una disolución reconstituida se mantiene generalmente fría y protegida de la luz, con las condiciones exactas en la etiqueta del producto. El agua bacteriostática se conserva según su propia etiqueta. Si la vas a usar con un vial de péptido, puedes confirmar que ese vial es auténtico por su <a href="verify/">número de lote</a>.</p>

        <h2>Lo que este artículo no cubre</h2>
        <p>Esto describe una operación de laboratorio sobre un material de investigación: disolver un sólido definido en un volumen definido para obtener una concentración definida. No es una guía de preparación para administración a humanos ni a animales, y no contiene información de dosis de ningún tipo.</p>

        <h2>Solo para investigación</h2>
        <p>Todos los productos que vende Codex Research son estrictamente para investigación y desarrollo de laboratorio. No son para consumo humano ni animal, y no pretenden diagnosticar, tratar, curar ni prevenir ninguna enfermedad. Este artículo describe únicamente uso de laboratorio.</p>
      `,
      faq: [
        { q: '¿Qué es el agua bacteriostática?', a: 'Es agua estéril con una pequeña cantidad de alcohol bencílico (alrededor del 0,9 por ciento) añadida como conservante. El conservante frena el crecimiento bacteriano, y eso es lo que la hace adecuada para un vial en el que se va a entrar más de una vez.' },
        { q: '¿Cuál es la diferencia entre agua bacteriostática y agua estéril?', a: 'El agua estéril para inyección no lleva nada añadido y está pensada para un solo uso. El agua bacteriostática contiene alcohol bencílico como conservante, así que tolera varias extracciones, lo que encaja con un vial multidosis de investigación.' },
        { q: '¿Por qué se usa agua bacteriostática para reconstituir péptidos?', a: 'Disuelve limpiamente la mayoría de los péptidos y su conservante permite varias extracciones de un mismo vial durante los días o semanas que puede durar un estudio. Esa reutilización es la razón práctica principal por la que los laboratorios la eligen.' },
        { q: '¿Cómo se reconstituye un péptido liofilizado en el laboratorio?', a: 'Se disuelve una masa conocida del sólido liofilizado en un volumen medido de disolvente para obtener una disolución de concentración conocida: 10 mg en 2,00 mL son 5 mg/mL. Dos correcciones importan en trabajo exacto: la torta ocupa volumen propio, así que las disoluciones precisas se enrasan a una marca en vez de añadir un volumen nominal; y la masa etiquetada es de sólido, no de péptido neto, porque el material arrastra un contraión y agua residual. Esto describe únicamente una operación de laboratorio sobre un material de investigación.' },
        { q: '¿Cuánto tiempo es estable una disolución de péptido reconstituida?', a: 'Mucho menos que el sólido seco. En agua avanzan la desamidación de asparagina y glutamina, la hidrólisis del esqueleto y la oxidación de metionina, histidina, lisina, triptófano y tirosina, y todas se aceleran con la temperatura. Un conservante no frena ninguna. Los fabricantes aconsejan repartir las disoluciones en alícuotas, mantenerlas congeladas por debajo de unos quince grados bajo cero y evitar ciclos repetidos de congelación y descongelación.' },
        { q: '¿Se puede usar agua estéril común en vez de bacteriostática?', a: 'Sí, y a veces es preferible. El alcohol bencílico no es inerte: los conservantes de su clase favorecen el desplegamiento parcial y la agregación, y el alcohol bencílico queda en la mitad del rango en una comparación publicada. Para trabajos donde la agregación o la caracterización física son el objetivo, el agua estéril común o un tampón definido pueden ser mejor diluyente. Sea cual sea el que se use, conviene anotarlo, porque el diluyente forma parte de la condición experimental.' },
      ],
      cta: 'Mira los <a href="catalog/">péptidos de investigación e insumos</a> de Codex Research, o <a href="verify/">revisa un número de lote</a>.',
    },

    'amino-acids-peptides-proteins-difference': {
      title: 'Aminoácidos, péptidos y proteínas: ¿cuál es la diferencia?',
      metaTitle: '¿Aminoácido, péptido o proteína? Dónde está la línea',
      metaDescription: 'Aminoácidos, péptidos y proteínas explicados: las diferencias de tamaño, estructura y función, desde una molécula suelta hasta una proteína plegada.',
      category: 'Fundamentos de péptidos',
      date: '16 ago 2025',
      excerpt: 'Una guía breve de la jerarquía de las moléculas biológicas, del residuo suelto a la proteína plegada.',
      imageAlt: 'Diagrama que compara aminoácidos, péptidos y proteínas por tamaño y estructura',
      related: ['peptide-synthesis', 'mass-spectrometry-peptide-research', 'what-is-bpc-157'],
      body: `
        <p class="lead">Aminoácido, péptido y proteína describen el mismo tipo de molécula a tres escalas. Un aminoácido es una unidad suelta. Un péptido es una cadena corta de ellas. Una proteína es una cadena larga que se pliega en una forma definida. Los límites entre los tres son convenciones, no leyes de la química, y conviene saberlo antes de tratar cualquiera de ellos como un corte rígido.</p>

        <h2>El aminoácido</h2>
        <p>Todo aminoácido estándar está construido igual: un carbono central que lleva un grupo amino, un grupo carboxilo, un hidrógeno y una cadena lateral. Solo cambia la cadena lateral, y de ahí viene toda la variedad. Algunas están cargadas, otras son polares, otras son aceitosas y evitan el agua, y dos contienen anillos que absorben luz ultravioleta, propiedad que hace visible un péptido a un detector a 280 nm.</p>
        <p>Ese carbono central lleva cuatro grupos distintos, así que es un centro estereogénico. Casi todos los aminoácidos de la biología son de forma L. La forma D es su imagen especular, idéntica en masa y en fórmula, y una medición de masa no distingue una de otra. Es de las pocas cosas que un certificado no puede resolver solo con la masa.</p>

        <h2>El enlace que los une</h2>
        <p>Un enlace peptídico se forma cuando el carboxilo de un aminoácido reacciona con el amino de otro y se libera una molécula de agua. El enlace resultante no es un enlace simple cualquiera. Los electrones se comparten a lo largo de la unión, dándole carácter parcial de doble enlace, y la consecuencia es que los seis átomos alrededor quedan en un plano y no pueden rotar libremente.</p>
        <p>Esa rigidez es lo que hace posible el plegamiento. Una cadena que pudiera girar en cualquier punto no tendría motivo para adoptar una forma sobre otra. En el laboratorio, formar ese enlace a propósito y en un orden elegido es todo el problema que resuelve la <a href="article/peptide-synthesis/">síntesis de péptidos</a>.</p>

        <h2>Veinte residuos estándar, y los de fuera de la lista</h2>
        <p>La síntesis de proteínas en células vivas usa veinte aminoácidos estándar, más dos que se incorporan por mecanismos especiales. La química no está limitada a esa lista. Una secuencia sintética puede incluir residuos que ningún organismo construye: aminoácidos D, residuos con cadenas laterales modificadas, o unidades por completo artificiales introducidas para cambiar cómo se comporta la cadena.</p>
        <p>Los extremos también se pueden alterar. El extremo amino suele acetilarse y el carboxilo amidarse, y ambas cosas retiran una carga que de otro modo quedaría en la punta de la molécula. Una cadena también puede unirse de cabeza a cola o por cadenas laterales, que es la diferencia entre un <a href="article/cyclic-vs-linear-peptides/">péptido cíclico y uno lineal</a>.</p>
        <p>Las secuencias se escriben del extremo amino al carboxilo, con código de tres letras o de una por residuo. Una especificación que cita una secuencia la cita en esa dirección, y leerla al revés produce una molécula distinta que, en la mayoría de los casos, pesa exactamente lo mismo.</p>
        <p>Cada uno de esos cambios altera la fórmula y, por tanto, la masa. Por eso una especificación que nombra un extremo modificado nombra un número que una medición de identidad confirma o contradice.</p>

        <h2>Dónde se traza la línea entre péptido y proteína</h2>
        <p>La convención habitual pone la raya alrededor de cincuenta residuos. Ahí no ocurre nada químico. El mismo enlace une el residuo cincuenta y uno que unió el dos, y una cadena no adquiere una propiedad nueva por cruzar una cuenta.</p>
        <p>Lo que cambia a lo largo de ese rango es el comportamiento. Las cadenas cortas tienden a quedarse flexibles en disolución, mientras que las largas tienen suficientes interacciones internas para sostener un plegamiento estable. La convención es un marcador aproximado de ese cambio, y se aplica sin consistencia: la misma molécula es un péptido en un artículo y una proteína pequeña en el siguiente.</p>
        <p>Los términos vecinos se solapan con la misma imprecisión. Oligopéptido describe una cadena corta, polipéptido una larga, y ambos se usan con holgura. Nuestra nota sobre <a href="article/peptide-length-terminology/">terminología de longitud</a> cubre cómo se usan en la práctica.</p>

        <h2>La estructura tiene niveles</h2>
        <p>La secuencia de residuos es la estructura primaria, y es el único nivel que hay que especificar para definir la molécula. Los patrones locales repetidos sostenidos por puentes de hidrógeno a lo largo del esqueleto, sobre todo la hélice y la lámina, son la estructura secundaria; ambas se predijeron a partir de la geometría de enlace antes de verse experimentalmente. La disposición tridimensional de toda la cadena es la estructura terciaria. <a class="cite" href="https://doi.org/10.1073/pnas.37.4.205" target="_blank" rel="noopener nofollow">(Referencia: Pauling et al., 1951)</a></p>

        <h2>Por qué la secuencia pesa tanto</h2>
        <p>Experimentos clásicos mostraron que una proteína desnaturalizada puede recuperar por su cuenta su forma y su actividad originales, lo que estableció que la información necesaria para plegarse está en la propia secuencia y no llega de fuera. <a class="cite" href="https://doi.org/10.1126/science.181.4096.223" target="_blank" rel="noopener nofollow">(Referencia: Anfinsen, 1973)</a> El corolario es que el plegamiento también puede salir mal, y el estudio del plegamiento incorrecto ha sido un campo sustancial por derecho propio. <a class="cite" href="https://doi.org/10.1038/nature02261" target="_blank" rel="noopener nofollow">(Referencia: Dobson, 2003)</a></p>

        <h2>No todo se pliega, y es normal</h2>
        <p>La imagen ordenada de una secuencia que colapsa en una forma fija no aplica a toda cadena. Muchas regiones funcionales no tienen estructura estable por su cuenta y solo adoptan una al encontrarse con su pareja de unión. Los péptidos cortos caen a menudo en esa categoría, y por eso describir un péptido como no plegado es una descripción y no un defecto. <a class="cite" href="https://doi.org/10.1006/jmbi.1999.3110" target="_blank" rel="noopener nofollow">(Referencia: Wright y Dyson, 1999)</a></p>

        <h2>Cómo se distinguen en la práctica</h2>
        <p>Nada de estas definiciones es lo que un laboratorio mide. Lo que se mide es masa, y cómo se comporta el material en una columna.</p>
        <ul>
          <li><b>La masa</b> distingue una secuencia de otra, porque cada residuo aporta un incremento conocido. Es lo que reporta la <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>, y así se produce la línea de identidad de un certificado.</li>
          <li><b>La hidrofobicidad</b> determina cuánto se retiene la molécula en una columna de fase reversa, que es la base de la <a href="article/high-performance-liquid-chromatography-hplc/">medición de pureza</a>.</li>
          <li><b>El tamaño</b> importa para elegir el método. Lo que sirve para un péptido de quince residuos no siempre es lo que se usa para una proteína plegada.</li>
        </ul>
        <p>Leídas juntas, esas dos mediciones convierten un nombre en una etiqueta en una afirmación que se puede contrastar con un <a href="verify/">lote concreto</a>.</p>
      `,
      faq: [
        {
          "q": "¿Qué diferencia hay entre un péptido y una proteína?",
          "a": "Longitud y comportamiento. Un péptido es por convención una cadena de dos a unos cincuenta residuos y suele quedarse flexible en disolución; una proteína es más larga y normalmente se pliega en una estructura tridimensional estable. El corte es una convención, no un límite químico."
        },
        {
          "q": "¿Qué es un enlace peptídico?",
          "a": "La unión entre dos aminoácidos, formada cuando un carboxilo reacciona con un amino y se libera agua. Los electrones se comparten a lo largo de la unión, dándole carácter parcial de doble enlace, así que los átomos de alrededor quedan en un plano y no rotan libremente."
        },
        {
          "q": "¿Cuántos aminoácidos hacen un péptido en vez de una proteína?",
          "a": "Normalmente de dos a unos cincuenta. Nada químico cambia en una cuenta concreta; lo que cambia en ese rango es si la cadena tiene suficientes interacciones para sostener una forma estable."
        },
        {
          "q": "¿Qué diferencia hay entre aminoácidos L y D?",
          "a": "Son imágenes especulares en el carbono central. La biología usa casi exclusivamente la forma L. Las dos tienen fórmulas y masas idénticas, así que la espectrometría de masas no las distingue."
        },
        {
          "q": "¿Cuáles son los niveles de estructura?",
          "a": "La primaria es la secuencia de residuos. La secundaria son patrones locales repetidos como hélices y láminas, sostenidos por puentes de hidrógeno del esqueleto. La terciaria es la disposición tridimensional de toda la cadena."
        },
        {
          "q": "¿Todos los péptidos se pliegan en una forma definida?",
          "a": "No. Muchas cadenas, y los péptidos cortos en particular, no tienen estructura estable por su cuenta y solo adoptan una al unirse a una pareja. Un péptido no plegado está siendo descrito, no diagnosticado como defectuoso."
        }
      ],
      cta: '¿Quieres ir más a fondo? Mira nuestros <a href="catalog/">péptidos de investigación</a> o aprende cómo se fabrican en la guía de <a href="article/peptide-synthesis/">síntesis de péptidos</a>.',
    },

    'peptide-synthesis': {
      title: 'Síntesis de péptidos: cómo se fabrican en el laboratorio',
      metaTitle: 'Síntesis de péptidos: de la SPPS a un lote 99% por HPLC',
      metaDescription: 'Cómo se fabrican los péptidos de investigación: síntesis en fase sólida, escisión y purificación por HPLC, y por qué el sólido final no es péptido puro.',
      category: 'Procesos de laboratorio',
      date: '22 jul 2025',
      excerpt: 'Del enlace peptídico a la purificación final: cómo se construyen y se verifican los péptidos sintéticos.',
      imageAlt: 'Síntesis de péptidos en fase sólida sobre perlas de resina en un laboratorio',
      related: ['amino-acids-peptides-proteins-difference', 'high-performance-liquid-chromatography-hplc', 'mass-spectrometry-peptide-research'],
      body: `
        <p class="lead">Un péptido sintético se construye residuo a residuo, en un orden fijo, con un lavado entre cada paso. El método que lo hace práctico es la síntesis en fase sólida, y entenderlo explica varias cosas que después aparecen en un certificado de análisis: por qué el polvo lleva un contraión, por qué unas secuencias cuestan más que otras, y por qué la pureza hay que medirla en vez de suponerla.</p>

        <h2>El enlace que tiene que formarse, una y otra vez</h2>
        <p>Un enlace peptídico se forma cuando el grupo carboxilo de un aminoácido se une al grupo amino del siguiente, liberando agua. Por su cuenta la reacción es lenta y poco selectiva, así que en la práctica el carboxilo se activa químicamente primero, y todo grupo que no deba reaccionar se bloquea con un grupo protector. Cada ciclo de una síntesis es una versión pequeña y controlada de ese problema. Para el vocabulario de base, ver nuestra guía sobre <a href="article/amino-acids-peptides-proteins-difference/">aminoácidos, péptidos y proteínas</a>.</p>

        <h2>Por qué anclar la cadena a una bolita lo cambió todo</h2>
        <p>En disolución, cada paso de una síntesis termina con una purificación, porque hay que separar el producto de todo lo demás del matraz. Unir la cadena en crecimiento a una resina insoluble elimina ese problema. El péptido se queda en la bolita, y reactivos y subproductos se lavan a través de un filtro. La idea se introdujo en 1963 y es la razón de que la síntesis de péptidos pueda automatizarse. <a class="cite" href="https://doi.org/10.1021/ja00897a025" target="_blank" rel="noopener nofollow">(Referencia: Merrifield, 1963)</a> <a class="cite" href="https://doi.org/10.1002/anie.198507993" target="_blank" rel="noopener nofollow">(Referencia: Merrifield, 1985)</a></p>

        <h2>La resina decide cómo termina la cadena</h2>
        <p>El primer residuo no se ancla a la bolita directamente sino a través de un enlazador, y la química de ese enlazador determina cómo queda el extremo carboxilo al cortar el péptido. Un enlazador libera un ácido carboxílico; otro libera una amida. No es trivia de fabricación: las dos formas difieren en masa en torno a un dalton y son compuestos distintos, así que una especificación que dice que el extremo está amidado describe algo que una medición de masa puede confirmar o contradecir.</p>

        <h2>El ciclo</h2>
        <p>La síntesis corre del extremo carboxilo hacia el amino, al revés de como construye una proteína un ribosoma. Cada residuo añadido repite los mismos cuatro pasos:</p>
        <ol>
          <li><b>Desprotección.</b> Se retira el grupo protector temporal del extremo libre de la cadena, dejando una amina lista para reaccionar.</li>
          <li><b>Lavado.</b> Se arrastran reactivos y grupos protectores liberados.</li>
          <li><b>Acoplamiento.</b> El siguiente aminoácido, activado en su carboxilo, forma el nuevo enlace.</li>
          <li><b>Lavado otra vez.</b> El exceso de reactivo sale antes de empezar el ciclo siguiente.</li>
        </ol>
        <p>Un péptido de veinte residuos es ese bucle repetido veinte veces. Nada se purifica por el camino.</p>

        <h2>Fmoc y Boc</h2>
        <p>Dominan dos estrategias de grupos protectores, nombradas por el grupo que protege el extremo amino entre ciclos. La química Boc lo retira con ácido. La química Fmoc lo retira con una base suave, lo que significa que los protectores de cadena lateral, que se quitan después con ácido, quedan intactos durante la síntesis. Esa separación de condiciones es lo que hace de Fmoc la opción habitual hoy. <a class="cite" href="https://doi.org/10.1021/jo00795a005" target="_blank" rel="noopener nofollow">(Referencia: Carpino y Han, 1972)</a> <a class="cite" href="https://doi.org/10.1093/oso/9780199637256.001.0001" target="_blank" rel="noopener nofollow">(Referencia: Chan y White, 1999)</a></p>

        <h2>Reactivos de acoplamiento y el costo de un paso incompleto</h2>
        <p>El reactivo que activa cada aminoácido decide qué tan completo queda el acoplamiento, y eso importa más de lo que suena. Si un acoplamiento va al 99 por ciento, una cadena de cada cien queda con un residuo de menos, y esa cadena acortada sigue por todos los ciclos restantes. El resultado es una secuencia de deleción: una molécula casi idéntica al objetivo, que difiere en un residuo. Los mejores reactivos de activación existen justo para empujar cada paso más cerca de completarse. <a class="cite" href="https://doi.org/10.1021/ja00063a082" target="_blank" rel="noopener nofollow">(Referencia: Carpino, 1993)</a></p>
        <p>Esas secuencias de deleción son las impurezas que un método de pureza tiene que resolver, y son la razón de que un pico pequeño pegado al principal en un cromatograma valga la pena mirarlo.</p>

        <h2>Comprobar un paso antes de seguir</h2>
        <p>Como nada se purifica entre ciclos, un acoplamiento fallido conviene detectarlo de inmediato. Desde 1970 se usa una prueba de color para grupos amino libres en la resina: las bolitas que aún llevan aminas sin reaccionar cambian de color, señal de que el acoplamiento no se completó. <a class="cite" href="https://doi.org/10.1016/0003-2697(70)90146-6" target="_blank" rel="noopener nofollow">(Referencia: Kaiser et al., 1970)</a></p>

        <h2>El corte, y de dónde sale el contraión</h2>
        <p>Cuando la secuencia está completa, el péptido se corta de la resina y se retiran los protectores de cadena lateral, normalmente en un solo paso ácido con ácido trifluoroacético y una mezcla de capturadores que recoge los fragmentos reactivos liberados. Ahí entra en escena el trifluoroacetato por primera vez. Reaparece durante la <a href="article/high-performance-liquid-chromatography-hplc/">purificación en fase reversa</a>, y parte de él se queda con el material, que es la razón de que un péptido se aísle normalmente como sal y de que parte del polvo pesado sea contraión y no péptido.</p>

        <h2>Secuencias que se resisten</h2>
        <p>No todas se comportan. Las cadenas ricas en residuos hidrofóbicos pueden agregarse sobre la resina, plegándose sobre sí mismas de modo que el extremo reactivo queda físicamente bloqueado y los acoplamientos se atascan. Las síntesis largas agravan el problema, porque cada ciclo extra es otra oportunidad para una pérdida pequeña. Los procedimientos estándar y las modificaciones para secuencias difíciles están bien documentados. <a class="cite" href="https://doi.org/10.1038/nprot.2007.454" target="_blank" rel="noopener nofollow">(Referencia: Coin et al., 2007)</a></p>
        <p>Pasada cierta longitud, la síntesis por pasos deja de ser práctica. La respuesta habitual es construir dos fragmentos más cortos y unirlos químicamente, un enfoque que hizo posibles las proteínas totalmente sintéticas. <a class="cite" href="https://doi.org/10.1126/science.7973629" target="_blank" rel="noopener nofollow">(Referencia: Dawson et al., 1994)</a></p>

        <h2>Lo que sale de la resina no es el producto final</h2>
        <p>El material crudo contiene el objetivo, secuencias de deleción, cadenas mal desprotegidas y restos de la mezcla de corte. Se purifica, normalmente por cromatografía en fase reversa, y solo entonces se caracteriza: una corrida establece qué proporción es el objetivo, y la <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a> establece que el objetivo es la molécula pretendida. Esos dos resultados, ligados a un número de lote, son lo que reporta un <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a> y lo que puedes contrastar con un <a href="verify/">vial que tengas en la mano</a>.</p>
      `,
      faq: [
        {
          "q": "¿Cómo se fabrican los péptidos de investigación?",
          "a": "Casi siempre por síntesis en fase sólida. El primer residuo se ancla a una resina insoluble y la cadena se extiende un aminoácido por vez mediante ciclos de desprotección, lavado y acoplamiento. Al final se corta de la resina y se purifica."
        },
        {
          "q": "¿Por qué el péptido va unido a una resina?",
          "a": "Porque elimina la necesidad de purificar después de cada paso. La cadena se queda en el soporte sólido mientras reactivos y subproductos se lavan a través de un filtro, que es lo que hace el proceso repetible y automatizable."
        },
        {
          "q": "¿Qué diferencia hay entre síntesis Fmoc y Boc?",
          "a": "En cómo se retira el protector temporal del extremo amino. Boc usa ácido; Fmoc usa una base suave, dejando intacta la protección de cadena lateral hasta el final. Esa separación de condiciones hace de Fmoc la opción más común."
        },
        {
          "q": "¿Qué es una secuencia de deleción?",
          "a": "Una cadena a la que le faltó un residuo porque un acoplamiento no se completó, y que siguió por los ciclos restantes. Es casi idéntica al objetivo y difiere en un solo residuo, lo que la convierte en la impureza más difícil de resolver."
        },
        {
          "q": "¿Por qué un péptido sintético contiene trifluoroacetato?",
          "a": "El ácido trifluoroacético se usa para cortar el péptido de la resina y de nuevo como aditivo en la purificación en fase reversa. Parte queda asociado al material, así que el péptido suele aislarse como sal y parte del polvo pesado es contraión."
        },
        {
          "q": "¿Por qué unas secuencias son más difíciles que otras?",
          "a": "Las hidrofóbicas pueden agregarse sobre la resina y bloquear físicamente el extremo reactivo, atascando los acoplamientos. La longitud además acumula pérdidas pequeñas, porque cada ciclo adicional es otra oportunidad para un paso incompleto."
        }
      ],
      cta: 'Mira el catálogo de <a href="catalog/">péptidos de investigación</a> sintetizados en laboratorio, verificados por HPLC y espectrometría de masas.',
    },

    'cas-numbers-explained': {
      title: 'El número CAS, explicado',
      metaTitle: 'Número CAS: comprobar un compuesto en 30 segundos',
      metaDescription: 'Qué es un número de registro CAS, cómo funciona su dígito de control y cómo usarlo para confirmar que un compuesto es el que crees que es.',
      category: 'Investigación con péptidos',
      date: '03 ago 2026',
      excerpt: 'El identificador único que acompaña a cada nombre de compuesto, y cómo leerlo.',
      imageAlt: 'Un número de registro con dígito de control, y los otros tres identificadores que lo acompañan.',
      related: ['how-to-read-a-certificate-of-analysis', 'what-is-bpc-157'],
      body: `
        <p class="lead">Un número CAS es una etiqueta, no una descripción. No contiene información sobre estructura, fórmula ni masa, y no se puede deducir de ninguna de ellas. Su valor está en que es único y sin ambigüedad: una sustancia registrada, un número, y ningún sinónimo que discutir.</p>

        <h2>Cómo está formado</h2>
        <p>El formato son hasta diez dígitos en tres partes separadas por guiones, como 137525-51-0. Las partes no tienen significado químico. Los números se asignan por orden a medida que se registran las sustancias, así que un primer bloque alto indica un registro reciente y nada más.</p>
        <p>El último dígito es la excepción. Es un dígito de control calculado a partir de los anteriores, de modo que un número mal tecleado suele fallar la aritmética en vez de apuntar a otro compuesto. Es una salvaguarda pequeña pero real cuando alguien copia un número a mano entre una etiqueta, un certificado y una orden de compra.</p>

        <h2>Qué identifica el número</h2>
        <p>Identifica una sustancia registrada, y el registro trata las formas de un mismo compuesto como sustancias distintas. Un ácido libre y su sal de sodio llevan números distintos. Un hidrato y la forma anhidra llevan números distintos. Los estereoisómeros llevan números distintos.</p>
        <p>La consecuencia práctica es que un número CAS en una etiqueta afirma algo sobre la forma, no solo sobre la molécula. Si una especificación cita el número de una base libre y el vial contiene una sal, la etiqueta y el material no coinciden aunque el péptido sea el mismo.</p>

        <h2>Dónde se complica con péptidos</h2>
        <p>Los péptidos purificados por fase reversa suelen aislarse como sales, arrastrando trifluoroacetato o acetato de la purificación. El péptido y sus formas salinas son sustancias registradas distintas, así que más de un número puede ser correcto según qué forma se describa.</p>
        <p>Los complejos metálicos son peores. Un péptido de cobre existe como una especie en equilibrio cuya carga y contraión dependen de las condiciones, de modo que el número de registro queda ligado a una manera concreta de escribirlo. Nuestras notas sobre <a href="article/what-are-copper-peptides/">péptidos de cobre</a> y sobre <a href="article/what-is-ghk-cu/">GHK-Cu</a> explican por qué ahí el nombre no fija la fórmula.</p>

        <h2>No todo compuesto tiene uno</h2>
        <p>El registro no es automático. Un compuesto puede estar bien caracterizado en la literatura, catalogado en otras bases, y aun así no tener número CAS en fuentes públicas. A los compuestos de investigación recientes les pasa más que a los antiguos.</p>
        <p>La ausencia del número no es evidencia de nada sobre el material. Significa que el registro público es más delgado, lo que traslada el peso a la documentación del lote.</p>

        <h2>Por qué hizo falta una etiqueta única</h2>
        <p>Los nombres químicos no son únicos. Un compuesto puede llevar un nombre sistemático, varios nombres triviales, un código de investigación, una denominación común internacional y lo que decida imprimir un catálogo. Algunos de esos nombres son ambiguos por sí solos, y otros se comparten entre compuestos que difieren en cosas que un nombre no captura.</p>
        <p>Existen reglas de nomenclatura y ayudan: las convenciones para nombrar aminoácidos y péptidos las fija la comisión conjunta de IUPAC e IUB. <a class="cite" href="https://doi.org/10.1042/bj2190345" target="_blank" rel="noopener nofollow">(Referencia: IUPAC-IUB, 1984)</a> Pero un nombre sistemático para un péptido de cuarenta residuos es impracticable, y ahí es donde un número corto y arbitrario se gana su sitio.</p>
        <p>Los catálogos agravan el problema renombrando por motivos comerciales. Un compuesto vendido con nombre de casa conserva el número de registro que le corresponde a su estructura, y ese número es el hilo de vuelta a la química cuando el nombre ya se alejó.</p>

        <h2>Los otros identificadores</h2>
        <ul>
          <li><b>PubChem CID:</b> un número de registro de base de datos, asignado por la propia base. Enlaza a una estructura, una fórmula y propiedades calculadas.</li>
          <li><b>ChEMBL ID:</b> la misma idea en otra base, orientada a datos de bioactividad.</li>
          <li><b>InChI y su clave:</b> un identificador derivado de la estructura misma por un algoritmo publicado, de modo que dos personas con la misma estructura generan la misma cadena sin consultar registro alguno. <a class="cite" href="https://doi.org/10.1186/s13321-015-0068-4" target="_blank" rel="noopener nofollow">(Referencia: Heller et al., 2015)</a></li>
        </ul>
        <p>El último marca el contraste importante. Un número CAS hay que consultarlo porque fue asignado. Un InChI se calcula, así que lleva la estructura dentro.</p>

        <h2>El número no es la medición</h2>
        <p>Conviene resistir la costumbre de tratar un CAS coincidente como un paso de verificación. Confirma que la etiqueta nombra la sustancia que la especificación pretende. No puede confirmar que el material sea esa sustancia, porque nada del número se mide sobre la muestra.</p>
        <p>Todos los identificadores comparten esa limitación, incluidos los calculados. Un InChI derivado de una estructura dibujada describe la estructura que alguien dibujó, no el polvo que alguien pesó.</p>

        <h2>Cómo comprobar uno</h2>
        <p>Un número CAS resuelve en las bases químicas públicas. Al escribirlo debería devolver un compuesto cuyo nombre, fórmula y masa coincidan con lo que dice la especificación. Conviene comparar las tres cosas y no solo una: si el número resuelve pero la fórmula no cuadra con la etiqueta, la discrepancia es real y vale la pena preguntar.</p>
        <p>Es además la forma más rápida de detectar la diferencia entre un péptido libre y su complejo o su sal, porque los dos resuelven a registros distintos con masas distintas.</p>
        <p>Una comparación más vale la pena mientras estás ahí. La masa del registro se calcula a partir de la estructura, y la masa del certificado se mide sobre el lote. Que dos números obtenidos por caminos distintos coincidan dice más que cualquiera de los dos por separado.</p>

        <h2>Qué no establece un número CAS</h2>
        <p>Dice que se registró una sustancia con esa identidad. No dice nada del vial: ni la pureza, ni si el material es esa sustancia, ni de qué lote salió.</p>
        <p>Esas preguntas se responden midiendo. Una cifra de pureza por <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> y un resultado de identidad por <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>, reportados en un <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a> ligado a un número de lote que puedes <a href="verify/">comprobar</a>, son lo que conecta una entrada de registro con el polvo que tienes delante.</p>
      `,
      faq: [
        {
          "q": "¿Qué es un número CAS?",
          "a": "Un identificador único de registro para una sustancia química, de hasta diez dígitos en tres partes separadas por guiones. No contiene información estructural y no se deduce de una fórmula: los números se asignan por orden según se registran las sustancias."
        },
        {
          "q": "¿El último dígito significa algo?",
          "a": "Sí. Es un dígito de control calculado a partir de los anteriores, así que un número mal tecleado suele fallar la aritmética en vez de resolver a otro compuesto."
        },
        {
          "q": "¿Un péptido y su sal comparten número CAS?",
          "a": "No. El registro trata el ácido libre, sus sales, hidratos y estereoisómeros como sustancias distintas con números distintos. Como los péptidos suelen aislarse como sales tras la purificación, más de un número puede ser correcto según la forma que se describa."
        },
        {
          "q": "¿Y si un compuesto no tiene número CAS?",
          "a": "El registro no es automático, así que un compuesto bien caracterizado puede carecer de él en fuentes públicas. La ausencia no dice nada del material: significa que el registro público es más delgado y que la documentación del lote carga más peso."
        },
        {
          "q": "¿En qué se diferencia un InChI de un número CAS?",
          "a": "Un InChI se calcula a partir de la estructura con un algoritmo publicado, así que cualquiera con la misma estructura produce la misma cadena. Un número CAS lo asigna un registro y hay que consultarlo."
        },
        {
          "q": "¿Un número CAS en la etiqueta prueba lo que hay en el vial?",
          "a": "No. Indica qué sustancia afirma la etiqueta. La pureza y la identidad salen de mediciones, reportadas en un certificado de análisis ligado a un lote concreto."
        }
      ],
      cta: 'Mira el <a href="catalog/">catálogo de Codex Research</a>, donde cada producto lista su número CAS, o <a href="verify/">revisa un número de lote</a>.',
    },

    'excipients-in-peptides': {
      title: 'Excipientes en péptidos: qué son y para qué se usan',
      metaTitle: 'Excipientes en péptidos: qué más hay en el vial',
      metaDescription: '¿Qué son los excipientes en una formulación de péptidos? Cómo los estabilizantes, tampones y crioprotectores mantienen íntegro el péptido de investigación.',
      category: 'Formulación',
      date: '06 sep 2025',
      excerpt: 'El papel de los estabilizantes, los tampones y los agentes de carga en un vial liofilizado.',
      imageAlt: 'Excipientes comunes usados para estabilizar formulaciones de péptidos de investigación',
      related: ['lyophilization-freeze-drying', 'peptide-synthesis', 'high-performance-liquid-chromatography-hplc'],
      body: `
        <p class="lead">Abre un vial de péptido liofilizado y, en muchos casos, la mayor parte de lo que ves no es péptido. Los excipientes son los otros ingredientes: sustancias sin actividad propia, añadidas porque un péptido solo no sobrevive demasiado bien a la liofilización y al almacenamiento. Saber cuáles son cambia cómo se lee una masa en una etiqueta.</p>

        <h2>No son relleno</h2>
        <p>La palabra excipiente suena a paja, y esa es la idea equivocada. Cada uno está ahí por un fallo concreto que evita. La liofilización es un proceso duro: el material se congela, se le retira casi toda el agua por sublimación, y lo que queda tiene que aguantar el almacenamiento y luego disolverse limpio. Un péptido que pase por ahí sin ayuda puede agregarse, oxidarse, o salir como un residuo colapsado que no vuelve a disolverse bien. <a class="cite" href="https://doi.org/10.1016/S0378-5173(00)00423-3" target="_blank" rel="noopener nofollow">(Referencia: Wang, 2000)</a></p>

        <h2>Azúcares: reemplazar el agua que se quitó</h2>
        <p>La trehalosa y la sacarosa son los estabilizadores habituales, y el mecanismo es más interesante que "protegen". En una formulación seca el azúcar forma un vidrio amorfo: un sólido tan viscoso que el movimiento molecular dentro queda prácticamente detenido. El péptido queda inmovilizado en esa matriz, y los puentes de hidrógeno que habría hecho con el agua los hace con los grupos hidroxilo del azúcar.</p>
        <p>La idea salió del estudio de organismos que sobreviven a una desecación casi total, que acumulan justamente estos azúcares antes de secarse. <a class="cite" href="https://doi.org/10.1146/annurev.physiol.60.1.73" target="_blank" rel="noopener nofollow">(Referencia: Crowe et al., 1998)</a></p>

        <h2>Manitol: el que construye el cake</h2>
        <p>El manitol hace otro trabajo. Es un agente de relleno: a las cantidades de miligramos típicas de un péptido de investigación no hay material suficiente para formar un <a href="article/lyophilization-freeze-drying/">cake</a> sólido, y el manitol aporta la estructura que mantiene la forma tras irse el hielo.</p>
        <p>También se comporta distinto de los formadores de vidrio. Tiende a cristalizar en vez de quedarse amorfo, lo que es bueno para un cake firme y menos bueno para proteger una molécula que depende de quedar encerrada en un vidrio. Muchas formulaciones usan los dos, uno para la estructura y otro para la estabilización.</p>

        <h2>Tampones, y la trampa que llevan dentro</h2>
        <p>Los péptidos se degradan a velocidades que dependen mucho del pH, así que un tampón mantiene la disolución donde la degradación es más lenta. La complicación está en el camino hacia abajo: al congelarse una disolución, se separa hielo puro y todo lo demás se concentra en la fracción líquida que va encogiendo. Si un componente del par tampón cristaliza antes que el otro, el pH de esa fracción se desplaza, a veces varias unidades, justo cuando el material está más vulnerable.</p>
        <p>Por eso elegir tampón para un producto liofilizado no es intercambiable con elegirlo para una disolución.</p>

        <h2>Tensioactivos: proteger las superficies</h2>
        <p>El polisorbato 20 y el polisorbato 80 aparecen a concentraciones muy bajas, y su trabajo son las interfases: aire-líquido, líquido-sólido, la pared del vial. Los péptidos y las proteínas se acumulan en las superficies y ahí pueden desplegarse o agregarse, y un tensioactivo ocupa esas interfases primero.</p>
        <p>Vienen con una advertencia que vale la pena conocer, porque los propios polisorbatos se degradan con el tiempo por oxidación e hidrólisis, y sus productos de degradación no son inertes. Un estabilizador no es una solución permanente. <a class="cite" href="https://doi.org/10.1002/jps.21190" target="_blank" rel="noopener nofollow">(Referencia: Kerwin, 2008)</a></p>

        <h2>Aminoácidos como excipientes</h2>
        <p>La glicina se usa de relleno en el mismo papel que el manitol. La arginina se usa por otra razón: suprime la agregación y mejora la solubilidad, lo que importa en secuencias reacias a volver a disolverse. La histidina sirve de tampón y de estabilizador a la vez. <a class="cite" href="https://doi.org/10.1007/978-1-4615-0557-0_5" target="_blank" rel="noopener nofollow">(Referencia: Carpenter et al., 2002)</a></p>
        <p>Conviene notar que son aminoácidos libres, no residuos de una cadena, y no aparecen en la secuencia del compuesto. Nuestra nota sobre <a href="article/amino-acids-peptides-proteins-difference/">aminoácidos, péptidos y proteínas</a> cubre esa distinción.</p>

        <h2>Algunos viales no llevan más que el compuesto</h2>
        <p>Nada de esto significa que todo péptido de investigación esté formulado. Muchos se despachan como el compuesto purificado y su contraión y nada más, sobre todo cuando la cantidad basta para formar un cake por sí sola y la secuencia no es propensa a agregarse.</p>
        <p>Los proveedores lo eligen a propósito, y en algunos contextos de laboratorio es lo preferible: un excipiente que estabiliza un vial también puede interferir en un ensayo, aportar fondo a un método analítico, o ser una variable más que controlar. La pregunta no es si hay excipientes sino si lo sabes.</p>

        <h2>Por qué importa al pesar el polvo</h2>
        <p>Los excipientes forman parte de la masa del vial. También el contraión que queda de la purificación, y también el agua absorbida.</p>
        <p>Por eso la pureza cromatográfica y el contenido neto de péptido responden preguntas distintas. Un lote puede ser 99 por ciento puro por <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>, es decir que casi todo el péptido detectado era el objetivo, mientras el péptido es una minoría del polvo pesado. Ninguna cifra está mal. Un <a href="article/how-to-read-a-certificate-of-analysis/">certificado</a> que reporta solo una está incompleto.</p>
        <p>Los excipientes explican además algo que de otro modo parece una inconsistencia entre dos viales del mismo compuesto. Uno puede verse como un cake blanco y firme llenando la base y otro como una película apenas visible, y la diferencia puede ser de formulación y no de contenido: un agente de relleno construye estructura visible, y el material sin él no tiene con qué construirla. La apariencia no mide cuánto hay.</p>

        <h2>Qué debería decir una especificación</h2>
        <p>Para material de investigación la pregunta útil es si la formulación está declarada. Un vial descrito solo por su compuesto y su cifra de miligramos deja abierto si esa cifra se refiere al péptido o a sólidos totales, y si hay algo más presente. Cuando importa para el trabajo, la especificación debería decirlo.</p>
      `,
      faq: [
        {
          "q": "¿Qué son los excipientes en una formulación de péptido?",
          "a": "Sustancias añadidas junto al péptido que no tienen actividad propia. Existen para evitar fallos concretos durante la liofilización y el almacenamiento: agregación, oxidación, colapso del cake o dificultad para volver a disolverse."
        },
        {
          "q": "¿Por qué se usan azúcares como la trehalosa?",
          "a": "Forman un vidrio amorfo en estado seco, un sólido tan viscoso que el movimiento molecular queda prácticamente detenido, y hacen puentes de hidrógeno con el péptido en lugar del agua retirada. La estrategia viene de organismos que sobreviven a la desecación casi total."
        },
        {
          "q": "¿Qué hace el manitol?",
          "a": "Es un agente de relleno. A cantidades de miligramos no hay material suficiente para formar un cake sólido, y el manitol aporta la estructura. Tiende a cristalizar en vez de formar vidrio, así que construye un cake firme pero estabiliza menos que un azúcar."
        },
        {
          "q": "¿Por qué importa el tampón en un péptido liofilizado?",
          "a": "Porque al congelarse se separa hielo puro y todo lo demás se concentra en una fracción líquida que encoge. Si un componente del par tampón cristaliza antes que el otro, el pH de esa fracción puede desplazarse varias unidades justo cuando el material está más vulnerable."
        },
        {
          "q": "¿Los excipientes afectan a cuánto péptido tengo?",
          "a": "Sí. Forman parte de la masa del vial, igual que el contraión de la purificación y el agua absorbida. Por eso la pureza cromatográfica y el contenido neto de péptido son cifras distintas y un certificado completo reporta ambas."
        },
        {
          "q": "¿Los aminoácidos usados como excipientes son parte del péptido?",
          "a": "No. La arginina, la glicina y la histidina pueden estar presentes como aminoácidos libres para relleno, solubilidad o tamponamiento. Son moléculas aparte y no aparecen en la secuencia del compuesto."
        }
      ],
      cta: 'Mira nuestros <a href="catalog/">péptidos de investigación</a>, formulados para la estabilidad y para dar resultados reproducibles.',
    },

    'lyophilization-freeze-drying': {
      title: 'Liofilización: cómo funciona',
      metaTitle: 'Polvo liofilizado: por qué los péptidos se envían secos',
      metaDescription: '¿Qué es la liofilización? Cómo el secado por congelación conserva péptidos y proteínas: congelación, secado primario y secado secundario, paso a paso.',
      category: 'Procesos de laboratorio',
      date: '03 ago 2025',
      excerpt: 'Por qué los péptidos se liofilizan para conservar su estructura y su estabilidad durante el almacenamiento.',
      imageAlt: 'Proceso de liofilización retirando agua de muestras de péptido congeladas',
      related: ['excipients-in-peptides', 'high-performance-liquid-chromatography-hplc', 'peptide-synthesis', 'bacteriostatic-water-for-peptide-reconstitution'],
      body: `
        <p class="lead">La liofilización, también llamada secado por congelación, es un proceso de deshidratación que retira el agua de una muestra congelada por sublimación a presión reducida. Conserva compuestos sensibles como péptidos, proteínas y vacunas manteniendo su estructura y su estabilidad para el almacenamiento prolongado.</p>

        <h2>Qué significa «polvo liofilizado»</h2>
        <p>La expresión describe el estado físico del material, no un grado ni una formulación. Lo que queda en el vial después del secado por congelación es un sólido poroso que ocupa aproximadamente la misma forma y el mismo volumen que ocupaba la disolución congelada, y por eso se le suele llamar torta y no polvo. El hielo sublima y la matriz sólida que lo sostenía se queda atrás. Algunas tortas son densas y uniformes, otras son escamosas o se desmoronan en los bordes, y con las masas pequeñas típicas de los péptidos de investigación la torta puede ser una película fina o unas pocas motas en la pared del vial, o no parecer nada. Un vial que parece vacío no ha perdido necesariamente su contenido.</p>

        <h2>¿Qué es la liofilización?</h2>
        <p>La liofilización es un proceso de deshidratación que se usa en laboratorios de investigación y farmacéuticos para conservar materiales biológicos. La técnica retira el agua de una muestra congelada mediante sublimación, el paso directo del hielo a vapor, a presión reducida. Eso ayuda a mantener la estructura y la estabilidad de compuestos sensibles como péptidos, proteínas y vacunas.${cite('Referencia: Tang y Pikal, 2004', 'https://doi.org/10.1023/B:PHAM.0000016234.73023.75')}</p>

        <h2>¿Cómo funciona el proceso?</h2>
        <p>La liofilización ocurre típicamente en tres etapas:</p>
        <ol>
          <li><b>Congelación:</b> la muestra se enfría hasta que el agua se convierte en hielo, formando una matriz sólida que estabiliza el material.</li>
          <li><b>Secado primario (sublimación):</b> se baja la presión y se aplica calor suavemente, de modo que el agua congelada sublima a vapor sin pasar por la fase líquida.</li>
          <li><b>Secado secundario (desorción):</b> se retiran las moléculas de agua ligadas que quedan, reduciendo la humedad final a niveles muy bajos.</li>
        </ol>
        <p>${cite('Referencia: Franks, 1998', 'https://doi.org/10.1016/S0939-6411(98)00004-6').trim()}</p>

        <h2>Por qué la congelación decide casi todo el resultado</h2>
        <p>Congelar no es solo enfriar. A medida que baja la temperatura, el agua se separa como hielo y los solutos restantes quedan empujados a bolsas cada vez más concentradas, que congelan a temperaturas más bajas que el agua de alrededor. La mayoría de las muestras se comportan como eutécticos, una mezcla de solutos y disolvente que solo está bien congelada cuando toda la mezcla eutéctica ha solidificado. Otras no cristalizan nunca: la suspensión se vuelve más viscosa al enfriarse hasta que fragua como un sólido vítreo en el punto de transición vítrea, y este segundo tipo es bastante más difícil de liofilizar.${cite('Referencia: Labconco, A Guide to Freeze Drying for the Laboratory', 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf')}</p>
        <p>La velocidad de enfriamiento importa por la misma razón. Enfriar rápido da cristales de hielo pequeños, útiles cuando hay que preservar una estructura para microscopía, pero deja canales estrechos en la matriz y hace que la muestra seque más despacio. Enfriar lento da cristales más grandes y canales menos restrictivos por los que el vapor puede escapar. En cualquier caso, el producto tiene que estar congelado por debajo de su temperatura eutéctica o de transición vítrea antes de empezar a secar, porque las bolsas de material sin congelar se expanden bajo vacío y arruinan la estructura de la torta final.</p>

        <h2>Temperatura de colapso, y qué dice una torta mala</h2>
        <p>Hay una temperatura por encima de la cual la estructura macroscópica del producto que se seca cede; se llama temperatura de colapso, y suele estar unos dos grados por encima de la temperatura de transición vítrea de la formulación congelada.${cite('Referencia: Chen et al., 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8107147/')} El secado tiene que correr por debajo de ella. Si se sube demasiado la temperatura del producto para ahorrar tiempo, la matriz se hunde, y eso se ve después como una torta encogida, vítrea o refundida. Una torta colapsada no es solo un problema estético: se asocia a más humedad residual y a una redisolución más lenta, así que el aspecto es un indicador de calidad real y no una preferencia.</p>

        <h2>Humedad residual</h2>
        <p>La sublimación no retira toda el agua. Según la formulación y el ciclo, el producto que sale del secado primario puede conservar todavía del orden de un cinco a un veinte por ciento de agua en peso, ligada al sólido en vez de presente como hielo.${cite('Referencia: Chen et al., 2021', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8107147/')} Para eso está el secado secundario, que normalmente se prolonga hasta bajar el agua residual a alrededor de un uno o dos por ciento. Importa porque el agua actúa como plastificante: cuanta más quede en un sólido amorfo, más baja es la temperatura de transición vítrea de la torta terminada y más movilidad molecular hay a cualquier temperatura de almacenamiento. La humedad residual se mide por valoración Karl Fischer y es uno de los atributos que puede reportar un <a href="article/how-to-read-a-certificate-of-analysis/">certificado de análisis</a> completo.</p>

        <h2>¿Por qué se usa la liofilización?</h2>
        <p>El método permite conservar a largo plazo compuestos que son inestables en forma líquida. Para péptidos y proteínas, la liofilización minimiza la degradación, facilita el almacenamiento y el transporte, y permite una reconstitución precisa para los experimentos. Suele apoyarse en <a href="article/excipients-in-peptides/">excipientes</a> que actúan como agentes de carga y estabilizantes. El proceso también es escalable, desde muestras pequeñas de laboratorio hasta lotes industriales.${cite('Referencia: Wang, 2000', 'https://doi.org/10.1016/S0378-5173(00)00423-3')}</p>

        <h2>Aplicaciones clave en el laboratorio</h2>
        <ul>
          <li>Conservar muestras de péptido y proteína para una vida útil prolongada.</li>
          <li>Estabilizar vacunas y biológicos durante la producción y la distribución.</li>
          <li>Preparar estándares de referencia para métodos analíticos como la <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a>.</li>
          <li>Permitir una reconstitución controlada para modelos de investigación in vitro o in vivo.</li>
        </ul>
        <p>${cite('Referencia: Tang y Pikal, 2004', 'https://doi.org/10.1023/B:PHAM.0000016234.73023.75').trim()}</p>

        <h2>Qué hace el equipo</h2>
        <p>Un liofilizador establece una diferencia de presión y después aporta calor a través de ella. La sublimación depende de la diferencia de presión de vapor entre el producto y el colector de hielo, así que el colector, una trampa fría, tiene que mantenerse bastante más frío que el producto; las moléculas de agua migran desde la muestra, a mayor presión, hacia el colector, a menor presión, donde condensan, mientras la bomba de vacío retira los gases que no condensan. El calor es la fuerza motriz, no un añadido: sublimar un gramo de agua de hielo a vapor cuesta del orden de diez veces la energía necesaria para congelar ese mismo gramo.${cite('Referencia: Labconco, A Guide to Freeze Drying for the Laboratory', 'https://documents.thermofisher.com/TFS-Assets/ANZ/brochures/labconco-guide-fd.pdf')}</p>

        <h2>Una nota sobre «polvo liofilizado para inyección»</h2>
        <p>Esa frase es una designación de forma farmacéutica del etiquetado regulatorio. Identifica un medicamento estéril autorizado, fabricado y liberado bajo un registro sanitario, y arrastra un conjunto de obligaciones legales que no tienen nada que ver con el método de secado. Un compuesto de investigación suministrado liofilizado no es eso, por mucho que se parezca en el vial. Los dos comparten un estado físico y nada más, y conviene no confundirlos al comparar descripciones de catálogo.</p>

        <h2>Por qué los péptidos de investigación se suministran así</h2>
        <p>Porque el estado seco es el estable. Los péptidos en disolución tienen una vida útil marcadamente más corta que el mismo material liofilizado, porque las vías de degradación que más pesan, la hidrólisis del esqueleto y la desamidación de cadenas laterales, necesitan agua para avanzar.${cite('Referencia: Shi y McHugh, 2023', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10526705/')} El secado por congelación también hace que cantidades pequeñas sean prácticas de pesar, enviar a temperatura ambiente y guardar, y permite presentar el material como una masa definida en un vial sellado. Lo que viene después, disolver ese sólido en un volumen medido de disolvente para obtener una disolución de concentración conocida, se cubre aparte en nuestra nota sobre <a href="article/bacteriostatic-water-for-peptide-reconstitution/">reconstituir péptidos liofilizados</a>.</p>
      `,
      faq: [
        { q: '¿Para qué se usa la liofilización?', a: 'La liofilización se usa para conservar compuestos que son inestables en forma líquida, como péptidos, proteínas y vacunas, retirando el agua sin alterar su estructura.' },
        { q: '¿Cuáles son las tres etapas del secado por congelación?', a: 'Las tres etapas son la congelación, el secado primario por sublimación y el secado secundario por desorción del agua ligada.' },
        { q: '¿Por qué se liofilizan los péptidos?', a: 'El secado por congelación minimiza la degradación del péptido, facilita el almacenamiento y el transporte, y permite una reconstitución precisa antes de los experimentos.' },
        { q: '¿Qué significa «polvo liofilizado»?', a: 'Describe el estado físico del material después del secado por congelación, no un grado ni una formulación. Lo que queda en el vial es un sólido poroso, normalmente llamado torta, que conserva aproximadamente la forma y el volumen que tenía la disolución congelada una vez que el hielo ha sublimado.' },
        { q: '¿Por qué a veces un vial de péptido liofilizado parece vacío?', a: 'Con las masas pequeñas típicas de los péptidos de investigación, la torta puede ser una película fina o unas pocas motas en la pared del vial en vez de un volumen visible de polvo. Un vial que parece vacío no ha perdido necesariamente su contenido: la masa etiquetada y el certificado de análisis son los que definen qué hay dentro.' },
        { q: '¿Qué es la temperatura de colapso en liofilización?', a: 'Es la temperatura por encima de la cual cede la estructura macroscópica del producto que se está secando, y suele estar unos dos grados por encima de la temperatura de transición vítrea de la formulación congelada. Secar por encima de ella produce una torta encogida o refundida, asociada a más humedad residual y a una redisolución más lenta.' },
        { q: '¿Cuánta agua queda después del secado por congelación?', a: 'El producto que sale del secado primario puede conservar todavía entre un cinco y un veinte por ciento de agua en peso. El secado secundario retira el agua ligada, normalmente hasta alrededor de un uno o dos por ciento, y eso se mide por valoración Karl Fischer.' },
      ],
      cta: 'Nuestros <a href="catalog/">péptidos de investigación</a> se suministran liofilizados para máxima estabilidad y vida útil.',
    },

    'what-is-bpc-157': {
      title: '¿Qué es BPC-157?',
      metaTitle: 'BPC-157: secuencia, peso molecular y fórmula',
      metaDescription: 'Secuencia de BPC-157 (GEPPPGKPADDAGLV), fórmula molecular C62H98N16O22, peso molecular, número CAS y cómo se sintetiza el pentadecapéptido.',
      category: 'Investigación con péptidos',
      date: '03 ago 2026',
      excerpt: 'Un péptido sintético de 15 aminoácidos con una secuencia tomada de una proteína gástrica, y la investigación a su alrededor.',
      imageAlt: 'Vial del péptido de investigación BPC-157, un pentadecapéptido, con su certificado de análisis',
      // Los relacionados en inglés (síntesis, terminología) aún no están
      // traducidos: se sustituyen por los del territorio que sí lo está.
      related: ['how-to-read-a-certificate-of-analysis', 'verify-research-peptide-batch-coa-panama'],
      body: `
        <p class="lead">BPC-157 es uno de los péptidos de investigación de los que más se habla, y también uno de los peor entendidos. Es un péptido sintético corto cuya secuencia de aminoácidos está tomada de una proteína presente en el jugo gástrico. En el laboratorio se estudia por cómo interactúa con vías de señalización ligadas a la reparación de tejidos y a la formación de vasos sanguíneos. Esto es lo que es, sin adornos.</p>

        <h2>¿Qué es BPC-157?</h2>
        <p>BPC-157 es un pentadecapéptido, que significa un péptido de 15 aminoácidos. El nombre viene de «Body Protection Compound», compuesto de protección corporal, y la secuencia deriva de una proteína más grande presente en el estómago. Se produce de forma sintética para investigación mediante <a href="article/peptide-synthesis/">síntesis de péptidos en fase sólida</a>, no se extrae de tejido. Su número CAS es 137525-51-0 y su fórmula molecular es C62H98N16O22, con un peso molecular cercano a 1419 g/mol. Si no queda clara la diferencia entre un péptido corto como este y una proteína completa, nuestra nota sobre <a href="article/amino-acids-peptides-proteins-difference/">aminoácidos, péptidos y proteínas</a> la cubre.</p>

        <h2>¿De dónde viene la secuencia?</h2>
        <p>La secuencia de BPC-157 corresponde a un fragmento de una proteína protectora identificada en el jugo gástrico. Ese origen es parte de por qué llama la atención en investigación: los péptidos que se mantienen íntegros en un medio ácido son interesantes de estudiar, y buena parte de la literatura temprana miró a BPC-157 justo en ese contexto. La versión que se usa hoy en los laboratorios es totalmente sintética y se caracteriza por su certificado de análisis, no por su procedencia.</p>

        <h2>La secuencia de aminoácidos de BPC-157</h2>
        <p>Un pentadecapéptido tiene quince residuos. En BPC-157 van, del extremo N al extremo C, en código de tres letras:</p>
        <p><b>Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val</b></p>
        <p>En código de una letra la misma cadena es <b>GEPPPGKPADDAGLV</b>, y la forma de ácido libre se escribe <b>H-GEPPPGKPADDAGLV-OH</b>. Las dos notaciones son sinónimos registrados en la ficha de PubChem, así que cualquiera sirve para confirmar que una ficha describe la misma molécula.</p>
        <table>
          <tr><th>Posición</th><th>Residuo</th><th>Código</th><th>Posición</th><th>Residuo</th><th>Código</th></tr>
          <tr><td>1</td><td>Glicina</td><td>Gly / G</td><td>9</td><td>Alanina</td><td>Ala / A</td></tr>
          <tr><td>2</td><td>Ácido glutámico</td><td>Glu / E</td><td>10</td><td>Ácido aspártico</td><td>Asp / D</td></tr>
          <tr><td>3</td><td>Prolina</td><td>Pro / P</td><td>11</td><td>Ácido aspártico</td><td>Asp / D</td></tr>
          <tr><td>4</td><td>Prolina</td><td>Pro / P</td><td>12</td><td>Alanina</td><td>Ala / A</td></tr>
          <tr><td>5</td><td>Prolina</td><td>Pro / P</td><td>13</td><td>Glicina</td><td>Gly / G</td></tr>
          <tr><td>6</td><td>Glicina</td><td>Gly / G</td><td>14</td><td>Leucina</td><td>Leu / L</td></tr>
          <tr><td>7</td><td>Lisina</td><td>Lys / K</td><td>15</td><td>Valina</td><td>Val / V</td></tr>
          <tr><td>8</td><td>Prolina</td><td>Pro / P</td><td></td><td></td><td></td></tr>
        </table>
        <p>Solo aparecen ocho de los veinte aminoácidos estándar. La prolina es la más frecuente, con cuatro residuos; la glicina aparece tres veces; la alanina y el ácido aspártico, dos cada una; y el ácido glutámico, la lisina, la leucina y la valina, una vez cada uno. De ahí salen dos puntos estructurales directos. No hay cisteína, así que la molécula no tiene puente disulfuro ni tiol libre. Y las posiciones 3, 4 y 5 son tres prolinas consecutivas, una secuencia que la literatura de revisión describe como conformacionalmente rígida y propensa a adoptar una hélice de poliprolina II, una estructura levógira estéricamente incómoda de atacar para las enzimas proteolíticas.</p>
        <p>El término en sí es solo un conteo. «Pentadeca-» es quince en griego, de <i>penta</i> (cinco) y <i>deka</i> (diez), así que un pentadecapéptido tiene exactamente quince residuos, igual que un dipéptido tiene dos.</p>

        <h2>Fórmula molecular, peso molecular e identificadores</h2>
        <p>Estos son los identificadores públicos en los que deben coincidir una ficha de catálogo y un certificado de análisis:</p>
        <table>
          <tr><th>Atributo</th><th>Valor</th></tr>
          <tr><td>Fórmula molecular</td><td>C<sub>62</sub>H<sub>98</sub>N<sub>16</sub>O<sub>22</sub></td></tr>
          <tr><td>Peso molecular promedio</td><td>1419,5 g/mol (se cita a menudo como 1419,53 Da)</td></tr>
          <tr><td>Masa monoisotópica</td><td>1418,704 Da</td></tr>
          <tr><td>Número de registro CAS</td><td>137525-51-0</td></tr>
          <tr><td>PubChem CID</td><td>9941957</td></tr>
          <tr><td>UNII</td><td>8ED8NXK95P</td></tr>
          <tr><td>ChEMBL ID</td><td>CHEMBL4297358</td></tr>
        </table>
        <p>La fórmula se puede comprobar contra la secuencia. Suma los átomos de los quince aminoácidos libres, resta las catorce moléculas de agua que se pierden al formarse los enlaces peptídicos, y el resultado es exactamente C<sub>62</sub>H<sub>98</sub>N<sub>16</sub>O<sub>22</sub>: los dieciséis nitrógenos, por ejemplo, son los quince nitrógenos amida del esqueleto más el nitrógeno de la cadena lateral de la lisina en la posición 7.</p>
        <p>Las dos cifras de masa hacen trabajos distintos. El peso promedio cercano a 1419,5 tiene en cuenta la abundancia natural de los isótopos y es el número que se usa para pesar y para los cálculos de concentración. La masa monoisotópica de 1418,704 usa solo el isótopo más abundante de cada elemento, y es la cifra contra la que se compara una comprobación de identidad por <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>.</p>

        <h2>De dónde viene el nombre, y cuándo se describió</h2>
        <p>BPC es la abreviatura de Body Protection Compound. El nombre pertenece primero a una proteína más grande, de unos 40 kDa, presente en el jugo gástrico; BPC-157 es el fragmento de quince residuos tomado de su extremo N-terminal, una relación que se enuncia en los mismos términos tanto en la patente como en la literatura analítica. Entró en la literatura científica en 1993, en un artículo de Sikiric, Petek, Rucman, Seiwerth y colegas en Zagreb, con la química desarrollada en paralelo en la empresa eslovena Diagen.</p>
        <p>El rastro de patentes es público. Las solicitudes más antiguas, incluida la patente estadounidense 5.288.708, se refieren a la proteína BPC natural aislada del jugo gástrico. Las posteriores, EP 0572688 y la patente estadounidense 6.268.346, se refieren al fragmento sintético. Una solicitud internacional de 2014, WO2014142764A1, asignada a Diagen y con Rudolf Rucman como inventor, cubre sales estables del pentadecapéptido y repite tanto la secuencia como su origen gástrico. Una patente describe una invención reivindicada, no una situación regulatoria.</p>

        <h2>¿Cómo se estudia BPC-157?</h2>
        <p>La investigación publicada sobre BPC-157 ha usado sobre todo cultivo celular y modelos animales. Los temas recurrentes en ese trabajo incluyen:</p>
        <ul>
          <li><b>Angiogénesis:</b> cómo se relaciona el péptido con la formación de vasos sanguíneos nuevos en sistemas modelo.</li>
          <li><b>Señalización del óxido nítrico:</b> su interacción con una vía implicada en el tono vascular y en la respuesta de los tejidos.</li>
          <li><b>Tejidos y estructuras conectivas:</b> modelos que miran tendón, músculo y tejido gastrointestinal.</li>
        </ul>
        <p>Conviene ser preciso aquí. Son observaciones de modelos de laboratorio, no conclusiones sobre personas ni sobre animales. BPC-157 es un compuesto de investigación, y el resumen honesto es que sigue siendo un área de estudio preclínico activa, no cerrada.</p>

        <h2>Cómo se fabrica BPC-157</h2>
        <p>No se extrae nada de tejido. El BPC-157 de grado investigación se ensambla residuo por residuo con <a href="article/peptide-synthesis/">síntesis de péptidos en fase sólida</a>, que construye la cadena sobre un soporte polimérico insoluble; los documentos de patente de Diagen atribuyen a Sikiric y Rucman la ruta sintética y mencionan la preparación sobre soportes poliméricos sólidos. Los materiales de partida son derivados de aminoácidos protegidos, no material biológico. Después del ensamblaje la cadena se libera del soporte, se purifica por <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> de fase reversa, se confirma por espectrometría de masas y se liofiliza. Como la purificación en fase reversa aísla los péptidos como sales, el sólido seco lleva un contraión, típicamente trifluoroacetato, más agua residual, así que la masa pesada no es cien por ciento péptido; nuestra guía de <a href="article/how-to-read-a-certificate-of-analysis/">cómo leer un certificado de análisis</a> explica cómo se reporta eso.</p>
        <p>Un detalle de conservación se desprende de la propia secuencia: BPC-157 no contiene asparagina, glutamina, cisteína, metionina ni triptófano, los residuos que los fabricantes de péptidos señalan como acortadores de la vida útil por ser los más propensos a la desamidación o a la oxidación.</p>

        <h2>Calidad, pureza y manejo</h2>
        <p>Como un péptido corto vale lo que vale el lote que recibes, la pureza importa más que el nombre de la etiqueta. El BPC-157 de grado investigación se verifica por <a href="article/high-performance-liquid-chromatography-hplc/">HPLC</a> para la pureza y por <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a> para la identidad, y cada lote debe venir con su propio certificado de análisis. Normalmente se envía liofilizado, y cualquier vial de Codex Research se puede comprobar por su <a href="verify/">número de lote</a>.</p>

        <h2>Solo para investigación</h2>
        <p>Todos los productos que vende Codex Research, incluido BPC-157, son estrictamente para investigación y desarrollo de laboratorio. No son para consumo humano ni animal, y no pretenden diagnosticar, tratar, curar ni prevenir ninguna enfermedad.</p>
      `,
      faq: [
        { q: '¿Qué significa BPC-157?', a: 'BPC viene de «Body Protection Compound», compuesto de protección corporal. BPC-157 es un pentadecapéptido sintético (15 aminoácidos) cuya secuencia deriva de una proteína presente en el jugo gástrico. Se usa estrictamente para investigación de laboratorio.' },
        { q: '¿BPC-157 es un péptido natural o sintético?', a: 'La secuencia se origina en una proteína gástrica natural, pero el BPC-157 que se usa en investigación se fabrica de forma sintética por síntesis en fase sólida y se verifica por HPLC y espectrometría de masas.' },
        { q: '¿Cómo se estudia BPC-157 en el laboratorio?', a: 'La mayor parte del trabajo publicado usa cultivo celular y modelos animales, mirando vías asociadas a la angiogénesis, la señalización del óxido nítrico y el tejido conectivo. Son observaciones preclínicas, no conclusiones sobre su uso en personas ni en animales.' },
        { q: '¿Cuál es la secuencia de aminoácidos de BPC-157?', a: 'En código de una letra la secuencia es GEPPPGKPADDAGLV; en código de tres letras, Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val, leída del extremo N al extremo C. La forma de ácido libre se escribe H-GEPPPGKPADDAGLV-OH. Solo aparecen ocho aminoácidos distintos en la cadena, y la prolina ocupa cuatro de las quince posiciones.' },
        { q: '¿Cuál es la fórmula molecular y el peso molecular de BPC-157?', a: 'La fórmula molecular es C62H98N16O22. PubChem lista el peso molecular promedio como 1419,5 g/mol, citado habitualmente en la literatura como 1419,53 Da, y la masa monoisotópica como 1418,704 Da. Su número de registro CAS es 137525-51-0 y su PubChem CID es 9941957.' },
        { q: '¿Por qué a BPC-157 se le llama pentadecapéptido?', a: '«Pentadeca-» es quince en griego, de penta (cinco) y deka (diez), así que un pentadecapéptido es un péptido de exactamente quince residuos de aminoácido. El término describe la longitud de la cadena y nada más.' },
        { q: '¿Cuándo se describió BPC-157 por primera vez, y hay patente?', a: 'Entró en la literatura científica en 1993, en un artículo de Sikiric, Petek, Rucman, Seiwerth y colegas en Zagreb, con la química desarrollada en la empresa eslovena Diagen. La familia de patentes relacionada incluye US 5.288.708 sobre la proteína gástrica natural, EP 0572688 y US 6.268.346 sobre el fragmento sintético, y la solicitud de 2014 WO2014142764A1 sobre sales estables del pentadecapéptido.' },
      ],
      cta: 'Mira los <a href="catalog/">péptidos de investigación</a> de Codex Research, cada lote verificado con su certificado de análisis, o <a href="verify/">revisa un número de lote</a>.',
    },

    'peptide-purity-hplc-explained': {
      title: 'Pureza de péptidos: qué significa 99% por HPLC',
      metaTitle: 'Pureza de péptidos: lo que el 99% por HPLC no te dice',
      metaDescription: 'Qué mide una cifra de 99% de pureza por HPLC, qué deja fuera y por qué la identidad por espectrometría de masas responde lo que la pureza no puede.',
      category: 'Investigación con péptidos',
      date: '03 ago 2026',
      excerpt: 'Qué mide un porcentaje de pureza, y qué no, cuando lo lees en un COA.',
      imageAlt: 'El porcentaje de área, las condiciones que lo producen y las preguntas que deja abiertas.',
      body: `
        <p class="lead">Noventa y nueve por ciento por HPLC es la cifra más citada del sector y la menos examinada. Es una medición real con un significado preciso, y ese significado es más estrecho de lo que casi todo el mundo supone.</p>

        <h2>Qué es la cifra</h2>
        <p>La muestra se empuja por una columna que separa sus componentes, un detector registra cada uno al salir, y el resultado es un cromatograma: una traza con picos. El péptido buscado es el pico principal. La pureza es el área bajo ese pico dividida entre el área total de todos los picos que vio el detector, en porcentaje.</p>
        <p>Así que 99 por ciento dice que el objetivo representó cerca del 99 por ciento de lo que este método detectó bajo estas condiciones. Cada parte de esa frase está trabajando.</p>

        <h2>El área no es masa</h2>
        <p>Esta es la lectura equivocada que más importa. El porcentaje de área responde una pregunta sobre los picos. No responde qué parte del polvo del vial es péptido.</p>
        <p>El contraión de la purificación, el agua absorbida y cualquier <a href="article/excipients-in-peptides/">excipiente</a> forman parte del material pesado y no aportan pico a la longitud de onda de detección. Un lote puede ser 99 por ciento puro por área y estar bastante por debajo de 99 por ciento de péptido en masa, sin contradicción entre las dos cifras. El contenido neto de péptido es el número aparte que responde la segunda pregunta, y un <a href="article/how-to-read-a-certificate-of-analysis/">certificado</a> completo reporta las dos.</p>

        <h2>"Detectó" también está trabajando</h2>
        <p>Los métodos para péptidos detectan en el ultravioleta, y la longitud de onda decide qué se ve. Cerca de 214 nm absorbe el propio enlace amida, así que prácticamente cualquier péptido registra. A 280 nm la señal viene sobre todo de triptófano y tirosina, de modo que una secuencia sin residuos aromáticos es casi invisible.</p>
        <p>Cualquier cosa sin cromóforo a la longitud de onda elegida no aporta nada al total, lo que significa que no puede bajar el porcentaje. La misma muestra analizada a dos longitudes de onda puede devolver dos cifras de pureza, ambas honestas.</p>

        <h2>"Bajo estas condiciones" también</h2>
        <p>La columna, el gradiente, el flujo y la duración de la corrida cambian qué se separa de qué. Un gradiente suave resuelve especies que uno pronunciado funde en un solo pico, y dos laboratorios pueden reportar cifras distintas para el mismo lote porque uno le dio más espacio a la separación. <a class="cite" href="https://doi.org/10.1002/0471973106" target="_blank" rel="noopener nofollow">(Referencia: Dong, 2006)</a> <a class="cite" href="https://doi.org/10.1002/9780470508183" target="_blank" rel="noopener nofollow">(Referencia: Snyder et al., 2009)</a></p>
        <p>Un porcentaje citado sin sus condiciones es una afirmación, no un resultado. Las guías sobre validación de procedimientos analíticos existen porque un número es inseparable del procedimiento que lo produjo. <a class="cite" href="https://doi.org/10.1201/b12039" target="_blank" rel="noopener nofollow">(Referencia: Swartz y Krull, 2012)</a></p>

        <h2>Por qué el ácido de la fase móvil afecta a la cifra</h2>
        <p>Los métodos para péptidos corren a pH bajo con un aditivo de par iónico, normalmente ácido trifluoroacético, que afina los picos y mejora la separación de secuencias parecidas. La concentración de ese aditivo cambia la retención y la resolución, y el efecto se ha estudiado de forma sistemática. <a class="cite" href="https://doi.org/10.1016/j.chroma.2005.02.047" target="_blank" rel="noopener nofollow">(Referencia: Shibue et al., 2005)</a></p>
        <p>Dos consecuencias llegan al certificado. Un método con poco aditivo puede no resolver una impureza que otro mejor ajustado sí separa, lo que sube la pureza aparente. Y para algo que no sea un péptido simple, como un complejo metálico, las condiciones ácidas pueden desplazarlo hacia su forma disociada, de modo que el pico medido tal vez no sea la especie que nombra la etiqueta.</p>

        <h2>Un porcentaje tiene precisión</h2>
        <p>La integración no es exacta. Dónde coloca el software el inicio y el final de un pico, cómo traza la línea base bajo una traza que deriva, y si agrupa un hombro con el pico principal o lo separa, todo mueve el resultado. Dos analistas integrando el mismo cromatograma pueden diferir en el primer decimal.</p>
        <p>Por eso la diferencia entre 99,1 y 99,4 por ciento suele llevar menos información de la que aparenta, mientras que la diferencia entre 95 y 99 es real.</p>

        <h2>Qué se esconde dentro del pico principal</h2>
        <p>Una impureza que sale de la columna a la vez que el objetivo se cuenta como objetivo. Las candidatas habituales son las que produce la <a href="article/peptide-synthesis/">síntesis</a>: secuencias de deleción a las que falta un solo residuo, o cadenas que conservaron un grupo protector. Se parecen lo bastante al objetivo como para que resolverlas sea justo lo que el método tiene que hacer bien.</p>
        <p>Un hombro en el pico principal, o un pico pequeño pegado a él, informa más que una cifra limpia. Si el certificado incluye la traza, la traza vale la pena leerla. <a class="cite" href="https://doi.org/10.1002/0470087951" target="_blank" rel="noopener nofollow">(Referencia: Kazakevich y LoBrutto, 2006)</a></p>

        <h2>La pureza no dice nada de la identidad</h2>
        <p>Un cromatograma reporta que un componente domina. No tiene opinión sobre cuál es. Una muestra podría ser 99 por ciento pura y ser 99 por ciento de la molécula equivocada, y el cromatograma se vería igual.</p>
        <p>La identidad sale de la <a href="article/mass-spectrometry-peptide-research/">espectrometría de masas</a>, que mide la masa y la compara con la calculada para la secuencia pretendida. Pureza e identidad son dos preguntas, y un documento que responde una es medio documento.</p>

        <h2>Ni de otras contaminaciones</h2>
        <p>La endotoxina es el ejemplo más claro. No es un péptido, no se comporta como tal en la columna, y una cifra de pureza no está diseñada para verla. Cuando el trabajo previsto es sensible a ella, el <a href="article/endotoxins-in-research-peptides/">contenido de endotoxina</a> se mide por su propio método y se reporta en su propia línea.</p>
        <p>Lo mismo vale para los disolventes residuales y para el contenido de agua. Cada uno es una determinación aparte, y ninguno mueve el porcentaje de pureza.</p>

        <h2>Cómo leer una especificación</h2>
        <p>Una cifra como "≥99% por HPLC" es una especificación, no un resultado: indica el umbral que el lote tenía que cumplir. Un resultado es un número medido para un lote con nombre y en una fecha. Se parecen en la página y significan cosas distintas, y por eso el número de lote es el hilo que conecta una afirmación con una medición que puedes <a href="verify/">comprobar</a>. Una especificación aplica a todos los lotes; un resultado, a uno.</p>
      `,
      faq: [
        {
          "q": "¿Qué significa 99 por ciento por HPLC?",
          "a": "Que el pico del objetivo representó cerca del 99 por ciento del área total de picos que el método detectó, bajo las condiciones usadas. Es una afirmación sobre los componentes detectados, no sobre el peso del polvo."
        },
        {
          "q": "¿99 por ciento puro es lo mismo que 99 por ciento de péptido?",
          "a": "No. El contraión, el agua absorbida y los excipientes forman parte del material pesado y no producen pico. Un lote puede ser 99 por ciento puro por área y bastante menos por masa. El contenido neto de péptido es la cifra aparte."
        },
        {
          "q": "¿La misma muestra puede dar dos cifras de pureza?",
          "a": "Sí. La longitud de onda cambia qué se ve, y el gradiente y la columna cambian qué se separa. Un gradiente suave puede resolver especies que uno pronunciado funde. Los dos resultados pueden ser honestos."
        },
        {
          "q": "¿Puede esconderse una impureza en el pico principal?",
          "a": "Sí. Lo que sale de la columna a la vez que el objetivo se cuenta como objetivo. Las secuencias de deleción a las que falta un residuo son las candidatas habituales, y por eso un hombro en el pico principal vale la pena mirarlo."
        },
        {
          "q": "¿Una cifra de pureza confirma que el péptido es el correcto?",
          "a": "No. El cromatograma muestra que un componente domina sin identificarlo. La identidad sale de la espectrometría de masas, comparando la masa medida con la calculada para la secuencia pretendida."
        },
        {
          "q": "¿Qué diferencia hay entre una especificación y un resultado?",
          "a": "Una especificación como ≥99% indica el umbral que un lote debía cumplir. Un resultado es un valor medido para un lote concreto en una fecha concreta. El número de lote es lo que conecta ambos."
        }
      ],
      cta: 'Mira los <a href="catalog/">péptidos de investigación</a> de Codex Research, cada lote verificado con su certificado de análisis, o <a href="verify/">revisa un número de lote</a>.',
    },

  };

  window.REA = window.REA || {};
  window.REA.POSTS_ES = POSTS_ES;
  window.REA.BLOG_DISCLAIMER_ES =
    'Todos los productos que vende Codex Research son estrictamente para uso en investigación de ' +
    'laboratorio. No están destinados al consumo humano ni animal, ni a uso médico o terapéutico. ' +
    'La información de este sitio es únicamente educativa e informativa.';
})();
