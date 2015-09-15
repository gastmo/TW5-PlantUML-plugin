# TW5-PlantUML-plugin
TiddlyWiki5 plugin for PlantUML to draw UML and other diagrams with a simple and intuitive language.

## Description
Plugin for easy integration of UML diagrams in [TiddlyWiki](http://tiddlywiki.com), using [PlantUML](http://plantuml.sourceforge.net).
The diagrams are written inside Tiddlywiki tiddlers, using the [PlantUML](|http://plantuml.com/) syntax, and will be shown as images when the tiddler is opened.
It only works online, as it uses the public online [PlantUML server](http://www.plantuml.com/plantuml/img/) to generate the images.

## Configuration
The url of the PlantUML server may be configured with the config tiddler: `$:/plugins/gastmo/plantuml/config`.  Just include a name-value pair such as:

```yaml
txtPlantUmlUrl: http://localhost:8080/plantuml/img/
```

## Usage
Import the plugin in your TiddlyWiki, then use the macro `plantuml` in your tiddler, with the following format:
```
<<plantuml 'diagram specification' 'alternate text' >>
```

where `alternate text` is optional.

Special values for the `alternate text` parameter are supported:

Value | Action
------|-------
raw   |The diagram source (unchanged)
src   |The diagram source with `@startuml`/`@enduml` tags
enc   |The encoded source passed to the PlantUML server
url   |The PlantUML server url (configurable)

## Examples
```
<<plantuml '
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
' 'A simple sequence diagram'>>
```

... displays as ...

![simple sequence diagram](imgage\simple-sequence-diagram.png)
