# Source-journal selection efficiency

## Summary

Source-journal selection efficiency measures the fraction of citable literature or citation traffic captured by a selected top-ranked journal source set.

## Canonical Form

- Unit of analysis: citation index, source-journal roster, total journal population, cited-paper corpus, or source-selection year.
- Typical representation: captured citation share, captured citable-paper share, log-rank coverage estimate, or marginal gain from adding lower-ranked journals.
- Measurement target: how much bibliometric coverage a curated source set obtains relative to an estimated full journal universe.
- Empirical signature: a small top-ranked journal subset captures a large citation share under cumulative-advantage concentration.

## Uses in Science of Science

- Adds a quantitative coverage measure to [citation-based source selection](../methods/citation_based_source_selection.md).
- Helps interpret [Web of Science](../datasets/web_of_science.md) and other selective citation indexes as sampled infrastructures rather than complete literature universes.
- Connects [Bradford-Lotka elite-zone law](../methods/bradford_lotka_elite_zone_law.md) to practical database coverage.
- Provides a caveat for [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md): high aggregate efficiency can still mask missing fields, languages, or local journals.

## Operationalization

- Estimate the relevant full journal population for a period.
- Rank journals by citation frequency or related source-selection evidence.
- Compute the share of citations or citable papers captured by the selected source-journal roster.
- Under the limiting cumulative-advantage approximation, compare selected rank r to population P using a log-ratio coverage heuristic.
- Report marginal gain from adding lower-ranked journals and the fields or languages affected by the additions.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) reports that a small cited-journal core captured a large share of SCI citation traffic.
- Garfield states that 25 journals accounted for 24 percent of references, 152 journals for 50 percent, 767 journals for 75 percent, and roughly 2,000 journals for 85 percent.
- The paper uses this concentration to argue that a good multidisciplinary collection can be built from a few hundred titles and that a multidisciplinary core for science may contain no more than about 1,000 journals.
- Verified full-text evidence from Price (1976) uses Barr's estimate of about 26,000 science and technology journals in 1966 and the Science Citation Index's 1,573 source journals for the same year.
- Price estimates that if those source journals were the highest-ranked journals, they would capture log(1,573) divided by log(26,000), or about 72 percent of citable papers.
- Price interprets this as built-in efficiency for an operation based on source selection rather than the entire journal population.
- The paper later notes that expanding the roster to about 2,500 source journals implies a similar log-ratio efficiency near 77 percent.
- Price argues that the Science Citation Index operation depends on cumulative-advantage concentration: roughly the most obvious 6 percent of citable journals can yield citations to about 72 percent of citable papers.
- The narrower [cumulative-advantage marginal coverage utility](cumulative_advantage_marginal_coverage_utility.md) captures Price's diminishing-return argument for adding lower-ranked sources after a high-ranked core.

## Caveats

- Aggregate capture share can hide systematic undercoverage of emerging, regional, applied, interdisciplinary, or non-English journals.
- The log-ratio heuristic assumes a ranked cumulative-advantage population and should be checked against observed citation flows.
- Source-journal efficiency is not the same as fairness, representativeness, or topic completeness.

## Links

- [citation-based source selection](../methods/citation_based_source_selection.md)
- [Bradford-Lotka elite-zone law](../methods/bradford_lotka_elite_zone_law.md)
- [cumulative-advantage marginal coverage utility](cumulative_advantage_marginal_coverage_utility.md)
- [journal citation frequency](journal_citation_frequency.md)
- [Web of Science](../datasets/web_of_science.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [language and transliteration coverage bias](../validations/language_transliteration_coverage_bias.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [subscription cost citation-value analysis](../methods/subscription_cost_citation_value_analysis.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [responsible metrics](responsible_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `source_journal_selection_efficiency`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: SCI source efficiency; source roster capture share; journal selection coverage; citation-index source efficiency
