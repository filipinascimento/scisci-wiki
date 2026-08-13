# New journal-pair novelty filter robustness

## Summary

New journal-pair novelty filter robustness tests whether Wang-style journal-pair novelty results survive alternative filters for journals, pair persistence, and field coverage.

## Canonical Form

- Unit of analysis: paper, cited-journal pair, journal filter, subject category, or robustness specification.
- Typical representation: repeated novelty-impact estimates after changing journal inclusion, new-pair reuse, or star-journal exclusions.
- Validation target: whether novelty findings are driven by sparse journals, transient pair artifacts, or broad multidisciplinary journals.
- Empirical signature: the relationship between novelty and long-run impact remains directionally similar across filtering choices.

## Uses in Science of Science

- Audits [new journal-pair novelty](../measures/new_journal_pair_novelty.md) and [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md).
- Supports interpretation of [highly novel paper class](../measures/highly_novel_paper_class.md), [journal impact factor novelty bias](journal_impact_factor_novelty_bias.md), and [novelty-atypicality distinction](novelty_atypicality_distinction.md).
- Separates measurement robustness from [forward reuse filter citation leakage](forward_reuse_filter_citation_leakage.md), where a future-reuse rule can become entangled with citation outcomes.
- Helps separate substantive recombination from database artifacts.
- Provides a robustness template for new-pair measures built on Dimensions, OpenAlex, WoS, or SciSciNet snapshots.

## Operationalization

- Recompute novelty after excluding low-cited or weakly indexed journals.
- Require new journal pairs to be reused later when testing whether they are not one-off artifacts.
- Exclude star journals and multidisciplinary journals that may mechanically connect otherwise distant fields.
- Re-estimate novelty associations across fields and novelty-measure variants.
- Compare direction, magnitude, and statistical significance of the main novelty effects.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) reports that the novelty-impact relationship is similar across separate field analyses.
- The appendix reports that results are not sensitive to excluding the 50% least-cited journals.
- The paper also checks a stricter definition requiring new combinations to be reused at least once in the next three years; relaxing that requirement gives consistent results.
- Results are robust to excluding referenced star journals and multidisciplinary journals.
- These checks support the interpretation that the novelty signal is not driven only by rare journals, single-use pairs, or broad source journals.

## Caveats

- Robustness to these filters does not prove that every new journal pair is conceptually meaningful.
- Later reuse requirements can introduce post-treatment information if used for ex ante evaluation.
- Star-journal and multidisciplinary-journal lists require explicit, reproducible definitions.
- Freshness and coverage differ across Dimensions, OpenAlex, WoS, and SciSciNet, so filter robustness should be rerun for each source.

## Links

- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [journal impact factor novelty bias](journal_impact_factor_novelty_bias.md)
- [novelty-atypicality distinction](novelty_atypicality_distinction.md)
- [forward reuse filter citation leakage](forward_reuse_filter_citation_leakage.md)
- [novelty robustness specification sweep](novelty_robustness_specification_sweep.md)
- [WoS 2001 novelty article cohort](../datasets/wos_2001_novelty_article_cohort.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `new_journal_pair_novelty_filter_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: novelty filter robustness; journal-pair novelty sensitivity; star-journal novelty robustness; new-pair reuse robustness
