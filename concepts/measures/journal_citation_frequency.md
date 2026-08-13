# Journal citation frequency

## Summary

Journal citation frequency is the raw count of how often a journal title is cited within a defined source set and citation window.

## Canonical Form

- Unit of analysis: journal title, cited journal-year profile, source index, or library/evaluation portfolio.
- Typical representation: count of received citations, often paired with the publication-year distribution of cited issues.
- Mechanism or measurement target: direct citation attention to a journal before normalizing by article output or field.
- Empirical signature: large, broad, or review-heavy journals can dominate raw counts even when their article-level citation rate is not highest.

## Uses in Science of Science

- Serves as the raw journal-level input behind [journal impact factor](journal_impact_factor.md) and other [citation impact indicators](citation_impact_indicators.md).
- Supports [citation-based source selection](../methods/citation_based_source_selection.md) when database builders or libraries need evidence about which journals account for large shares of references.
- Requires [cited journal title normalization](../methods/cited_journal_title_normalization.md) before raw counts are treated as journal-level evidence.
- Can be represented as part of [cited journal citation profiles](../representations/cited_journal_citation_profile.md), [source journal reference profiles](../representations/source_journal_reference_profile.md), or [journal citation network mapping](../representations/journal_citation_network_mapping.md).

## Operationalization

- Define the source journal set, cited-title normalization rules, citation window, and citation census date.
- Count each reference to a journal title from the source set.
- Optionally split counts by the publication year or issue year of the cited material.
- Report raw counts separately from normalized impact measures such as impact factor.

## Evidence and Validations

- Verified full-text evidence from Garfield (1972) ranks journal titles by the frequency with which they were cited in references from journals indexed for the Science Citation Index.
- The same full text describes a cited-title listing that accumulates all citations to the same title and reports how many times the title was cited during the last quarter of 1969, with a year distribution for cited issues.
- Garfield reports that title and abbreviation standardization was required before these counts could be interpreted, because raw cited-title strings were highly inconsistent.
- Garfield uses raw frequency as a first-order journal-evaluation signal while warning that it differs from impact: frequency favors large journals, whereas normalized impact factors can surface smaller journals whose articles are cited more intensely.
- Garfield's full text also motivates [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md) and [short-window journal ranking instability](../validations/short_window_journal_ranking_instability.md) as validation checks before raw counts are used for ranking.

## Caveats

- Raw frequency is size-sensitive and can confound journal volume, field size, review-article prevalence, and database coverage.
- Title changes, abbreviations, translations, sections, supplements, and merged journals require explicit normalization rules.
- Counts depend on the source journals included in the citing set, so they should be interpreted with [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Links

- [journal impact factor](journal_impact_factor.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [citation impact indicators](citation_impact_indicators.md)
- [cited journal title normalization](../methods/cited_journal_title_normalization.md)
- [citation-based source selection](../methods/citation_based_source_selection.md)
- [cited journal citation profile](../representations/cited_journal_citation_profile.md)
- [citation-age backfile retention](../methods/citation_age_backfile_retention.md)
- [source journal reference profile](../representations/source_journal_reference_profile.md)
- [journal citation network mapping](../representations/journal_citation_network_mapping.md)
- [citation sample representativeness check](../validations/citation_sample_representativeness_check.md)
- [short-window journal ranking instability](../validations/short_window_journal_ranking_instability.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Garfield, E. (1972). Citation analysis as a tool in journal evaluation. *Science*, 178(4060), 471-479. https://doi.org/10.1126/science.178.4060.471 [OpenAlex: W2053549370; Dimensions: pub.1062505982; WoS: unknown]

## Metadata

- Concept ID: `journal_citation_frequency`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Garfield (1972) (1972)
- Latest seen paper: Garfield (1972) (1972)
- Primary reference DOI: `10.1126/science.178.4060.471`
- OpenAlex ID: `W2053549370`
- Dimensions ID: `pub.1062505982`
- SciSciNet ID: `W2053549370`
- Aliases: journal citation count; raw journal citations; cited-journal frequency; journal title citation frequency
