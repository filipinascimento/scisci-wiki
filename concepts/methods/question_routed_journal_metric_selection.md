# Question-routed journal metric selection

## Summary

Question-routed journal metric selection is the method of choosing total influence, per-article influence, or price-normalized value according to the evaluation question being asked.

## Canonical Form

- Unit of analysis: evaluation question, journal, bundle, article, subscription cost, or metric family.
- Typical representation: decision rule mapping question type to journal metric.
- Method target: prevent one metric from being used for every journal-evaluation task.
- Empirical signature: Eigenfactor, Article Influence, and cost-effectiveness are selected for different questions.

## Uses in Science of Science

- Connects [Eigenfactor score](../measures/eigenfactor_score.md), [Article Influence Score](../measures/article_influence_score.md), and [Eigenfactor cost-effectiveness](../measures/eigenfactor_cost_effectiveness.md).
- Operationalizes [mission-aligned indicator selection](mission_aligned_indicator_selection.md) for journal metrics.
- Provides a corrective to [journal metric scope creep](../mechanisms/journal_metric_scope_creep.md).
- Helps separate total journal influence from average article influence and library value.

## Operationalization

- State whether the task is ranking journal influence, evaluating average article prestige, or assessing subscription value.
- Select the metric whose unit matches that task.
- Avoid substituting journal-level totals for article-level or author-level evaluation.
- Report metric limitations and field dependence alongside the selected indicator.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) explains that different Eigenfactor-family metrics answer different questions.
- The paper distinguishes total journal influence, per-article influence, and price-normalized cost-effectiveness.
- This supports routing metric choice through the evaluation question rather than defaulting to one score.

## Caveats

- Question routing does not remove all field, citation-window, or source-coverage bias.
- Multiple metrics may be needed for complex decisions.
- The method depends on evaluators stating the question clearly before inspecting rankings.

## Links

- [Eigenfactor score](../measures/eigenfactor_score.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [Eigenfactor cost-effectiveness](../measures/eigenfactor_cost_effectiveness.md)
- [mission-aligned indicator selection](mission_aligned_indicator_selection.md)
- [journal metric scope creep](../mechanisms/journal_metric_scope_creep.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003]

## Metadata

- Concept ID: `question_routed_journal_metric_selection`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: question-specific journal metric choice; metric routing by evaluation question; journal metric fit-to-purpose selection; Eigenfactor-family metric routing
