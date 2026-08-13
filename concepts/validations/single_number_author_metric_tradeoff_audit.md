# Single-number author-metric tradeoff audit

## Summary

Single-number author-metric tradeoff audit compares scalar author-impact indicators by their failure modes before using any one number for evaluation.

## Canonical Form

- Unit of analysis: author metric, evaluation portfolio, citation database, career stage, or assessment rule.
- Typical representation: metric comparison table listing target construct, advantages, disadvantages, sensitivity, and decision risk.
- Validation target: whether a scalar author metric captures the intended mix of productivity, impact, seniority, field context, and contribution.
- Empirical signature: different indicators rank the same author differently because each emphasizes a different part of the publication record.

## Uses in Science of Science

- Places [h-index](../measures/h_index.md) in a broader family of [citation impact indicators](../measures/citation_impact_indicators.md) instead of treating it as self-sufficient.
- Supports [responsible metrics](../measures/responsible_metrics.md) by requiring metric choice to be tied to construct validity and evaluation stakes.
- Connects author-level citation measures to [publication-citation unit choice](../methods/publication_citation_unit_choice.md), [h-index threshold assessment misuse](h_index_threshold_assessment_misuse.md), and portfolio review.
- Helps design dashboards where scalar metrics are warnings or summaries, not automatic decisions.

## Operationalization

- List candidate author indicators, such as publication count, total citations, citations per paper, thresholded significant papers, top-paper citations, h-index, and m-quotient.
- For each indicator, record its construct target and known failure modes.
- Compare rankings or classifications across indicators within field, career-stage, and database strata.
- Escalate high-stakes decisions to portfolio review when indicators disagree or failure modes are material.

## Evidence and Validations

- Verified full-text evidence from Hirsch (2005) compares h-index against publication count, total citations, citations per paper, significant-paper counts, and top-paper lists.
- Hirsch lists specific tradeoffs: productivity-only measures ignore impact, total citations can be dominated by big hits or reviews, citations per paper can reward low productivity, threshold counts require arbitrary cutoffs, and top-paper lists are not a single number.
- The same full text warns that a single number can only roughly approximate an individual's multifaceted profile.
- The caveat is strongest for life-changing decisions such as tenure, where exceptions and qualitative evidence matter.

## Caveats

- A tradeoff audit does not make a flawed metric valid; it only makes assumptions and failure modes explicit.
- Failure modes differ by field, career age, coauthorship practice, and citation database.
- Scalar indicators can be useful descriptive summaries but should not replace contribution, content, and context evidence.

## Links

- [h-index](../measures/h_index.md)
- [m-quotient](../measures/m_quotient.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [publication-citation unit choice](../methods/publication_citation_unit_choice.md)
- [h-index threshold assessment misuse](h_index_threshold_assessment_misuse.md)
- [h-index field-scale caveat](h_index_field_scale_caveat.md)
- [h-index tail insensitivity](h_index_tail_insensitivity.md)
- [portfolio-based researcher assessment](../methods/portfolio_based_researcher_assessment.md)

## References

- Hirsch, J. E. (2005). An index to quantify an individual's scientific research output. *Proceedings of the National Academy of Sciences*, 102(46), 16569-16572. https://doi.org/10.1073/pnas.0507655102 [OpenAlex: W2128438887; Dimensions: pub.1050917859; WoS: unknown]

## Metadata

- Concept ID: `single_number_author_metric_tradeoff_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hirsch (2005) (2005)
- Latest seen paper: Hirsch (2005) (2005)
- Primary reference DOI: `10.1073/pnas.0507655102`
- OpenAlex ID: `W2128438887`
- Dimensions ID: `pub.1050917859`
- SciSciNet ID: `W2128438887`
- Aliases: scalar author metric audit; author indicator failure-mode table; one-number metric caveat; author metric construct-validity audit
