# SciSci Wiki

**[Explore the live wiki](https://filipinascimento.github.io/scisci-wiki/)**

SciSci Wiki is a growing, linked collection of concepts from the science of science and adjacent research. It covers mechanisms, measures, methods, representations, datasets, hypotheses, validations, and consequences.

The current release contains 2,820 concept pages grounded in verified paper full text. Each page records a concise definition, canonical form, operationalization, evidence, caveats, related concepts, and APA-like references with persistent scholarly identifiers when available.

## What is included

- `concepts/`: the linked Markdown knowledge base.
- `index/concepts.csv`: the compact canonical concept index.
- `index/concept_similarity.csv`: text-similarity suggestions for discovery.
- `site/`: the readable, responsive site interface.
- `scripts/build_wiki.mjs`: the deterministic static-site generator.
- `scripts/validate_kb.py`: source knowledge-base validation.
- `scripts/validate_site.mjs`: generated-route and link validation.

Downloaded papers, extracted full text, subscription-derived files, machine-local paths, and private scholarly-data snapshots are intentionally excluded from this public repository.

## Build locally

Node.js 22 and Python 3.10 or newer are recommended.

```bash
npm ci
python scripts/validate_kb.py
npm run build
npm run check
npm run serve
```

Open `http://localhost:4173`. The generated `_site/` directory contains the complete portable static site.

## Interpretation

“First observed” and “latest observed” refer to the literature currently represented in this collection. They are not absolute priority claims and will change as coverage grows. Textually similar concepts are reading suggestions, not evidence of causal or theoretical equivalence.

References use a consistent APA-like convention and include DOI, OpenAlex, Dimensions, SciSciNet, and WoS identifiers when verified. Unknown identifiers are recorded as `unknown`, never inferred.

## Citation and license

Citation metadata is available in [`CITATION.cff`](CITATION.cff). Code and original project materials are released under the [MIT License](LICENSE). Bibliographic references and factual descriptions remain subject to their underlying sources.
