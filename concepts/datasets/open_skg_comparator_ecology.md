# Open SKG comparator ecology

## Summary

Open SKG comparator ecology is the set of open or partly open scholarly knowledge graphs that can be compared with one another for coverage, metadata quality, interoperability, and evaluation use.

## Canonical Form

- Unit of analysis: scholarly knowledge graph, open index, entity graph, citation source, or metadata provider.
- Typical representation: comparator-source list, coverage matrix, entity-model comparison, or interoperability benchmark.
- Data target: use multiple open scholarly graphs to understand source-dependent results rather than treating one index as exhaustive.
- Empirical signature: OpenAlex is situated alongside OpenCitations, AMiner, PID Graph, Open Research Knowledge Graph, Semantic Scholar, OpenAIRE, and related systems.

## Uses in Science of Science

- Provides comparator sources for [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).
- Extends [scholarly entity graphs](../representations/scholarly_entity_graphs.md) from one graph schema to a source ecosystem.
- Helps evaluate [OpenAlex](openalex.md) coverage, source scope, and metadata reliability.
- Supports infrastructure studies of open versus toll-access bibliometric data sources.

## Operationalization

- Define a set of scholarly knowledge graphs relevant to the analysis.
- Compare entity types, identifiers, update cadence, licenses, API or dump access, and coverage by field and year.
- Use DOI, ORCID, ISSN-L, ROR, or other identifiers to build cross-source overlap panels.
- Report which source-specific omissions or biases could affect the conclusion.

## Evidence and Validations

- Verified full-text evidence from Priem et al. (2022) describes OpenAlex as a fully open scholarly metadata source.
- The paper places OpenAlex in a growing list of open and partly open scholarly knowledge graphs including OpenCitations, AMiner, PID Graph, Open Research Knowledge Graph, Semantic Scholar, and OpenAIRE.
- The references in Priem et al. also list examples of these comparator infrastructures, supporting an ecology view rather than a single-source view.

## Caveats

- Open or partly open status does not guarantee complete coverage or stable access.
- Comparator graphs can share upstream data sources, so agreement is not always independent validation.
- Entity-model differences can make source overlap harder than DOI or title matching alone.

## Links

- [OpenAlex](openalex.md)
- [scholarly entity graphs](../representations/scholarly_entity_graphs.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation index research infrastructure](citation_index_research_infrastructure.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [OpenAlex open-infrastructure governance](../methods/openalex_open_infrastructure_governance.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; SciSciNet: W4229010617; WoS: unknown]

## Metadata

- Concept ID: `open_skg_comparator_ecology`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: open scholarly graph ecology; SKG comparator sources; open bibliometric graph comparator set; scholarly knowledge graph source ecology
