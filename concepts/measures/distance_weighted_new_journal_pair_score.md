# Distance-weighted new journal-pair score

## Summary

Distance-weighted new journal-pair score measures a paper's novelty by counting first-time referenced-journal combinations while giving more weight to combinations that bridge more distant journals.

## Canonical Form

- Unit of analysis: paper, referenced-journal pair, cited-journal profile, subject category, or publication year.
- Typical representation: sum or count of historically new cited-journal pairs weighted by journal distance.
- Measurement target: not only whether a pair is new, but how cognitively distant the paired journals are.
- Empirical signature: highly novel papers contain more new pairs and those pairs have lower similarity between the paired journals.

## Uses in Science of Science

- Refines [new journal-pair novelty](new_journal_pair_novelty.md) by separating close recombinations from distant recombinations.
- Helps define [highly novel paper class](highly_novel_paper_class.md) within subject categories.
- Links combinatorial novelty to [interdisciplinarity dimensions](interdisciplinarity_dimensions.md) and [tail novelty](tail_novelty.md).
- Supports tests of [novelty impact dispersion](novelty_impact_dispersion.md), [novelty short-window undercount](../validations/novelty_short_window_undercount.md), and [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md).

## Operationalization

- Construct pairs among journals cited by the focal paper.
- Mark pairs that have not appeared together in historical reference lists before the focal year.
- Compute journal similarity from co-cited journal profiles, commonly with cosine similarity.
- Convert similarity into a distance or inverse-similarity weight for each new pair.
- Aggregate weighted new-pair values to the paper level and normalize or rank within subject category.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) defines novelty as new referenced-journal combinations weighted by knowledge distance between journals.
- The full text describes journal distance using co-cited journal profiles and cosine-based similarity between journals.
- Highly novel papers have a larger number of new pairs and their new pairs are more distant, with smaller cosine similarity values than moderately novel papers.
- The distance-weighted score is used to assign the top 1% highly novel class within subject categories.
- The resulting novelty classes support long-window citation, journal impact factor, short-window, indirect-impact, and robustness analyses.

## Caveats

- Journal distance is a coarse proxy for cognitive distance among ideas, methods, or datasets.
- Co-citation profiles can be sparse or unstable for small and newly indexed journals.
- A distant pair can reflect multidisciplinary journals or database artifacts rather than substantive recombination.
- Results can depend on the similarity function and historical corpus used to estimate journal profiles.

## Links

- [new journal-pair novelty](new_journal_pair_novelty.md)
- [highly novel paper class](highly_novel_paper_class.md)
- [novelty occurrence skew](novelty_occurrence_skew.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)
- [journal-pair z-score](journal_pair_z_score.md)
- [tail novelty](tail_novelty.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [new journal-pair novelty filter robustness](../validations/new_journal_pair_novelty_filter_robustness.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `distance_weighted_new_journal_pair_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: distance-weighted novelty score; new-pair distance weighting; cosine-weighted journal-pair novelty; distant new-pair score
