# Dual-metric field-annotated rank table

## Summary

Dual-metric field-annotated rank table is a representation that ranks journals by one metric while displaying comparator metric values and field labels to expose size, field, and article-type effects.

## Canonical Form

- Unit of analysis: journal, metric rank, comparator metric, field, article type, or rank table.
- Typical representation: table sorted by one metric with additional metric and field columns.
- Representation target: make metric disagreement and field composition visible in the same display.
- Empirical signature: journals high on total influence, per-article influence, or impact factor can be compared side by side.

## Uses in Science of Science

- Complements [metric rank crosswalk plot](metric_rank_crosswalk_plot.md).
- Helps diagnose [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md).
- Exposes cases related to [review journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md).
- Supports communication of [Eigenfactor metrics](../measures/eigenfactor_metrics.md).

## Operationalization

- Choose the primary ranking metric.
- Add comparator metrics such as Article Influence, impact factor, total Eigenfactor, or cost-effectiveness.
- Add field or journal-type labels.
- Inspect cases where rank ordering changes strongly across metrics.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) presents ranked journal tables with multiple metric columns and disciplinary context.
- These tables show how different metrics emphasize different journal properties.
- The representation helps readers see that metric choice changes interpretation.

## Caveats

- Rank tables can imply false precision when metric uncertainty is not shown.
- Field labels can simplify multidisciplinary journals.
- Tables reveal divergence but do not decide which metric is appropriate for a task.

## Links

- [metric rank crosswalk plot](metric_rank_crosswalk_plot.md)
- [journal-size total-influence effect](../validations/journal_size_total_influence_effect.md)
- [review journal Article Influence inflation](../validations/review_journal_article_influence_inflation.md)
- [Eigenfactor metrics](../measures/eigenfactor_metrics.md)
- [question-routed journal metric selection](../methods/question_routed_journal_metric_selection.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003]

## Metadata

- Concept ID: `dual_metric_field_annotated_rank_table`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: dual-metric journal rank table; field-annotated metric table; journal metric comparison table; ranked metric crosswalk table
