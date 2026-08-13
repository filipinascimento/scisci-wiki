# Cumulative-advantage marginal coverage utility

## Summary

Cumulative-advantage marginal coverage utility measures the diminishing return from adding lower-ranked sources or entities after a high-ranked core already captures most successes.

## Canonical Form

- Unit of analysis: source-journal roster, library collection, document set, vocabulary, citation index, or ranked success population.
- Typical representation: marginal captured-success share, log-rank coverage curve, added-source cost curve, or elite-core coverage estimate.
- Measurement target: how much additional use, citation coverage, or value is gained by expanding beyond a high-success core.
- Empirical signature: doubling a large selected source set yields only a small additional share of successes under a cumulative-advantage distribution.

## Uses in Science of Science

- Extends [source-journal selection efficiency](source_journal_selection_efficiency.md) from an aggregate coverage share to a marginal-return measure.
- Connects [Bradford-Lotka elite-zone law](../methods/bradford_lotka_elite_zone_law.md) to database design, library collection policy, and citation-index coverage.
- Provides a quantitative basis for asking where selective databases gain efficiency and where they create coverage inequity.
- Helps interpret [Web of Science](../datasets/web_of_science.md), [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md), and source-selection policies as trade-offs rather than complete-corpus claims.

## Operationalization

- Rank sources or entities by accumulated successes, such as citations, use, publications, or word occurrences.
- Compute cumulative captured success as the selected rank cutoff grows.
- Estimate marginal gain from adding the next ranked block or doubling the source set.
- Compare marginal gain with acquisition, indexing, curation, storage, or review cost.
- Report which fields, languages, topics, or emerging areas are excluded by a marginal-efficiency threshold.

## Evidence and Validations

- Verified full-text evidence from Price (1976) derives a logarithmic relationship between ranked source count and total captured successes in the limiting cumulative-advantage case.
- Price argues that if one million highest-ranked individuals are already selected, adding the next million may increase total successes by only about 5 percent under the illustrative assumptions.
- The paper uses this marginal-return logic to explain why small libraries, vocabularies, document collections, and citation-index source sets can be economically attractive.
- Price also cautions that this is an elitism-producing force: high aggregate efficiency can coexist with systematic exclusion of lower-ranked sources.

## Caveats

- Marginal efficiency is not the same as fairness, epistemic diversity, policy relevance, or coverage of emerging fields.
- Costs and benefits are domain-specific; indexing a marginal journal may be cheap today but high-value for local or interdisciplinary research.
- Ranked-source assumptions can fail when sources are not stable, when field structure is heterogeneous, or when use shifts quickly.
- Responsible use requires reporting excluded populations, not only captured-success shares.

## Links

- [source-journal selection efficiency](source_journal_selection_efficiency.md)
- [Bradford-Lotka elite-zone law](../methods/bradford_lotka_elite_zone_law.md)
- [citation-index time-span scaling](citation_index_time_span_scaling.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [Web of Science](../datasets/web_of_science.md)
- [responsible metrics](responsible_metrics.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `cumulative_advantage_marginal_coverage_utility`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: marginal source-coverage utility; cumulative-advantage diminishing returns; citation-index marginal coverage; elite-core marginal utility
