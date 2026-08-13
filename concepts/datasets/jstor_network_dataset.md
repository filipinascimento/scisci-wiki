# JSTOR network dataset

## Summary

The JSTOR network dataset is a full-text and citation-network corpus built from JSTOR research articles, used to study long-run self-citation, gendered citation behavior, fields, and author-to-author citation edges.

## Canonical Form

- Unit of analysis: JSTOR article, paper-to-paper citation, author-to-author citation, authorship, field, year, and inferred author gender.
- Typical representation: longitudinal citation network plus full-text author and reference metadata.
- Data target: a long historical corpus where citation links and author strings can support field-stratified self-citation analysis.
- Empirical signature: a large pre-2012 scholarly corpus with millions of author-to-author citation opportunities and paper-level citation links.

## Uses in Science of Science

- Supplies the data layer for [self-citation rates](../measures/self_citation_rates.md), [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md), and [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Enables [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md) because paper citations can be expanded into citing-author by cited-author pairs.
- Supports [full-name self-citation matching](../methods/full_name_self_citation_matching.md) and [name-based demographic inference](../methods/name_based_demographic_inference.md) when disambiguated identities or self-reported demographics are unavailable.
- Provides a historical setting for [cumulative advantage](../mechanisms/cumulative_advantage.md) and [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md), since early self-citations can be studied across fields and years.
- Supports [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md) through [article-level Eigenfactor field random walks](../representations/article_level_eigenfactor_field_random_walks.md).
- Enables validation add-ons such as [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md), [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md), and [SSRN self-citation replication check](../validations/ssrn_self_citation_replication_check.md).
- Requires source-specific time-series checks such as [JSTOR blackout-window time-series artifact](../validations/jstor_blackout_window_time_series_artifact.md) when interpreting recent endpoint changes.

## Operationalization

- Extract research articles, author names, references, publication years, and field structure from the JSTOR corpus.
- Restrict to the period with observed self-citation links and enough volume for stable field or demographic estimates.
- Construct paper-to-paper citation edges, then expand them into author-to-author pairs when individual self-citation attribution is needed.
- Use full-text and citation metadata to infer fields, author gender, self-citation rates, and temporal patterns.
- Report the corpus boundary, because JSTOR coverage is selective and does not represent the whole scholarly record.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) describes JSTOR as a digital collection with more than 8 million documents, more than 4 million research articles, and about 1.8 million articles linked by citation to other JSTOR articles.
- King et al. call the linked subset the JSTOR network dataset because it supports citation-network analysis, and report that they used both citation and full-text publication data to infer gender and calculate self-citation rates.
- The same paper restricts the analytic dataset to papers from 1779 to 2011, yielding about 1.5 million papers.
- King et al. report 3.6 million authorships, more than 39 million author-to-author citations, 6.2 million unique citing-cited author pairs, 8.2 million paper-to-paper citations, and more than 750,000 paper-level self-citations in the dataset.
- The same full text describes a nested field hierarchy built from the JSTOR citation network using the hierarchical map equation and article-level Eigenfactor random walks.
- Later split pages from the same source separate blackout-window artifacts and [subfield self-citation ratio heterogeneity](../measures/subfield_self_citation_ratio_heterogeneity.md), because JSTOR field structure and source coverage both affect interpretation.

## Caveats

- JSTOR is not a universal scholarly index; coverage varies by field, venue, language, and historical period.
- The dataset is strong for long-run full-text/citation analysis but less suitable for recent papers after the 2011 cutoff used by King et al.
- Author strings are not fully disambiguated in the King et al. implementation, so homonym, synonym, and name-change errors can enter self-citation estimates.
- Gender inference in this dataset is name-based and binary, with incomplete and culturally uneven coverage.

## Links

- [self-citation rates](../measures/self_citation_rates.md)
- [authorship-normalized self-citation rate](../measures/authorship_normalized_self_citation_rate.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [author-to-author self-citation edges](../representations/author_to_author_self_citation_edges.md)
- [full-name self-citation matching](../methods/full_name_self_citation_matching.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [self-citation cumulative amplification](../mechanisms/self_citation_cumulative_amplification.md)
- [hierarchical map-equation field classification](../methods/hierarchical_map_equation_field_classification.md)
- [article-level Eigenfactor field random walks](../representations/article_level_eigenfactor_field_random_walks.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [JSTOR blackout-window time-series artifact](../validations/jstor_blackout_window_time_series_artifact.md)
- [subfield self-citation ratio heterogeneity](../measures/subfield_self_citation_ratio_heterogeneity.md)
- [self-citation team-size denominator effect](../validations/self_citation_team_size_denominator_effect.md)
- [SSRN self-citation replication check](../validations/ssrn_self_citation_replication_check.md)
- [citation networks](../representations/citation_networks.md)
- [field classifications](../measures/field_classifications.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 2378023117738903. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown]

## Metadata

- Concept ID: `jstor_network_dataset`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: JSTOR citation network; JSTOR network data set; JSTOR self-citation corpus; JSTOR full-text citation corpus
