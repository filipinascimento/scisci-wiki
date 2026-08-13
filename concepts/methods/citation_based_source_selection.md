# Citation-based source selection

## Summary

Citation-based source selection uses citation counts, impact measures, and citation-flow evidence to choose journals or other sources for an index, library collection, or evaluation corpus.

## Canonical Form

- Unit of analysis: journal, source collection, citation index, library portfolio, or field coverage set.
- Typical representation: ranked source list with citation-frequency, impact, coverage, and cost-benefit evidence.
- Mechanism or measurement target: identify source journals that account for large or strategically important shares of scholarly references.
- Empirical signature: a small set of highly cited journals often accounts for a large share of references, but omitted journals can bias field, language, and regional coverage.

## Uses in Science of Science

- Makes source coverage an explicit method choice for [Web of Science](../datasets/web_of_science.md), [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md), and other curated databases.
- Uses [journal citation frequency](../measures/journal_citation_frequency.md), [journal impact factor](../measures/journal_impact_factor.md), and [journal citation network mapping](../representations/journal_citation_network_mapping.md) as evidence for inclusion decisions.
- Depends on [cited journal title normalization](cited_journal_title_normalization.md) so cited-title variants do not distort source ranks.
- Can translate cited-age distributions into [citation-age backfile retention](citation_age_backfile_retention.md) decisions for library collections.
- Provides a historical bridge between bibliometric measurement and database construction.

## Operationalization

- Build a candidate source list and define the citing source set used to evaluate it.
- Calculate raw journal citation frequency and, when appropriate, normalized impact indicators.
- Estimate [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md) when the source roster is intended to capture broad citation traffic.
- Inspect source and cited-journal profiles for field coverage, language coverage, and specialty gaps.
- Use cited-year profiles for retention/backfile decisions and journal self-citation rates for editorial-policy diagnostics when relevant.
- Validate sampling choices before using short-window citation data for source decisions.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) links journal citation frequency and citation impact to journal selection for Current Contents and other ISI services.
- The same full text reports that the top 152 cited journals accounted for half of all references to journals in the SCI-derived analysis, supporting the claim that a few hundred journals can cover a large share of multidisciplinary citation traffic.
- Garfield also gives collection-management applications: cited-age distributions can guide journal backfiles and citation-frequency/impact data can be correlated with subscription costs.
- Garfield also warns that missing source journals, foreign-language journals, transliteration, and title-normalization problems can alter rankings, making [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) part of the method rather than an afterthought.
- The collection-budget application is split out as [subscription cost citation-value analysis](subscription_cost_citation_value_analysis.md), and the language/script caveat is split out as [language and transliteration coverage bias](../validations/language_transliteration_coverage_bias.md).
- Verified full-text evidence from Price (1976) adds a source-roster efficiency calculation: a selected set of 1,573 SCI source journals out of an estimated 26,000 relevant journals would capture about 72 percent of citable papers under the cumulative-advantage rank approximation.

## Caveats

- Citation prominence is not the same as epistemic diversity, social value, regional relevance, or field representativeness.
- A source-selection rule optimized for citation traffic can underrepresent emerging, local, non-English, applied, or slow-citing communities.
- Short-window data should be checked with a [citation sample representativeness check](../validations/citation_sample_representativeness_check.md) before supporting durable coverage decisions.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [journal citation frequency](../measures/journal_citation_frequency.md)
- [cited journal title normalization](cited_journal_title_normalization.md)
- [citation-age backfile retention](citation_age_backfile_retention.md)
- [subscription cost citation-value analysis](subscription_cost_citation_value_analysis.md)
- [source-journal selection efficiency](../measures/source_journal_selection_efficiency.md)
- [Bradford-Lotka elite-zone law](bradford_lotka_elite_zone_law.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [journal self-citation rate](../measures/journal_self_citation_rate.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [language and transliteration coverage bias](../validations/language_transliteration_coverage_bias.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [short-window journal ranking instability](../validations/short_window_journal_ranking_instability.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]
- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `citation_based_source_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: citation-based journal selection; source-journal selection; citation-informed collection selection; SCI source selection
