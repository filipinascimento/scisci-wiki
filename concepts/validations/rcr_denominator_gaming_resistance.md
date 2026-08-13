# RCR denominator gaming resistance

## Summary

RCR denominator gaming resistance evaluates whether attempts to inflate Relative Citation Ratio by manipulating self-citations or reference-list composition are practically constrained.

## Canonical Form

- Unit of analysis: focal paper, citing author, reference list, article citation rate, field citation rate, or RCR value.
- Typical representation: gaming scenario analysis, denominator stress test, or suspicious reference-list audit.
- Validation target: whether a normalized citation metric has obvious low-cost manipulation paths.
- Empirical signature: manipulation requires implausible self-citation volume, visibly unusual reference lists, coordinated behavior, or changes that reduce the intended score.

## Uses in Science of Science

- Makes metric-gaming analysis specific to [Relative Citation Ratio](../measures/relative_citation_ratio.md).
- Complements [low-denominator metric inflation check](low_denominator_metric_inflation_check.md) by asking whether users can strategically lower the denominator rather than merely benefiting from a low denominator.
- Connects [citation metric gaming](citation_metric_gaming.md) to dynamic [co-citation field normalization](../methods/co_citation_field_normalization.md).
- Provides a responsible-metrics checklist item for article-level citation indicators.

## Operationalization

- Separate numerator gaming from denominator gaming.
- For numerator gaming, examine whether self-citation or publication frequency could plausibly raise [article citation rate](../measures/article_citation_rate.md) enough to change evaluation outcomes.
- For denominator gaming, inspect whether reference lists attempt to pull the focal paper's co-citation field toward low-citation journals or fields.
- Compare target papers with field-normalized alternatives such as [expected citation rate](../measures/expected_citation_rate.md) and [field citation rate](../measures/field_citation_rate.md).
- Audit suspicious cases qualitatively, because a strange reference list or high self-citation count is not automatically misconduct.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) explicitly considers how an author might try to game RCR.
- The paper argues that inflating ACR through self-citation and frequent publication has practical limits because top-decile NIH-funded papers average more than 25 citations per year.
- Hutchins et al. identify a more direct denominator strategy: trying to lower FCR by stacking the reference section with papers that are co-cited with low-citation fields.
- The paper argues that this is difficult because citing behavior is constrained by content and an unusual reference list is likely to be visible to reviewers and editors.
- It also notes a self-defeating dynamic: if many authors begin citing work in poorly cited areas, the field citation rate for those areas can rise and the RCR advantage can fall.
- The validation remains a scenario analysis rather than a large-scale manipulation-detection study, so it should be paired with broader [citation metric gaming](citation_metric_gaming.md) audits.

## Caveats

- The Hutchins argument is about plausible single-author manipulation; it does not rule out coordinated citation cartels.
- Reviewer visibility of unusual reference lists depends on field norms, editorial practices, and review quality.
- Self-citation can be legitimate, so RCR gaming audits should avoid treating every self-citation as manipulation.
- Denominator-gaming resistance should be rechecked when RCR-like metrics are implemented with different databases or field-construction rules.

## Links

- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [citation metric gaming](citation_metric_gaming.md)
- [low-denominator metric inflation check](low_denominator_metric_inflation_check.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [field citation rate](../measures/field_citation_rate.md)
- [expected citation rate](../measures/expected_citation_rate.md)
- [article citation rate](../measures/article_citation_rate.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `rcr_denominator_gaming_resistance`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR gaming resistance; RCR denominator gaming check; reference-list stacking audit; self-defeating RCR gaming
