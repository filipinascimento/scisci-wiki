# RCR venue-dispersion check

## Summary

RCR venue-dispersion check validates article-level assessment by showing whether high-RCR papers are dispersed across journals rather than concentrated only in high-impact venues.

## Canonical Form

- Unit of analysis: article, journal, JIF stratum, investigator portfolio, or RCR distribution.
- Typical representation: RCR distributions within JIF bins, selected-journal boxplots, and high-RCR share outside elite venues.
- Validation target: whether journal-level metrics miss influential individual articles.
- Empirical signature: article RCR varies widely within impact-factor strata and influential articles appear in lower-profile journals.

## Uses in Science of Science

- Provides an RCR-specific validation for [journal metric article-level misuse](journal_metric_article_level_misuse.md).
- Supports [article influence impact-factor divergence](article_influence_impact_factor_divergence.md).
- Links [Relative Citation Ratio](../measures/relative_citation_ratio.md) to critiques of [journal impact factor](../measures/journal_impact_factor.md).
- Reinforces [responsible metrics](../measures/responsible_metrics.md) by showing why journal venue should not substitute for article assessment.

## Operationalization

- Bin papers by journal impact factor or compare selected journals with different impact factors.
- Plot article-level RCR distributions within each venue or venue stratum.
- Count the share of high-RCR papers published outside high-impact-factor journals.
- Report venue dispersion alongside correlations between article and journal metrics.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) reports wide ranges of article RCR within each JIF quintile.
- The paper shows that some lower-impact journals contain papers with RCR values exceeding the median RCR of high-impact journals.
- Hutchins et al. state that high-impact-factor journals account for only 11% of papers with RCR of 3 or above, so using impact factor would overlook most similarly influential papers.

## Caveats

- RCR venue dispersion does not imply that journal selectivity is irrelevant to all questions.
- The check depends on the paper corpus, citation window, and field-normalization method.
- It validates article-level dispersion, not every downstream use of RCR in evaluation.

## Links

- [journal metric article-level misuse](journal_metric_article_level_misuse.md)
- [article influence impact-factor divergence](article_influence_impact_factor_divergence.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)
- [journal impact factor](../measures/journal_impact_factor.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `rcr_venue_dispersion_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: RCR JIF dispersion; article RCR venue spread; high-RCR outside elite journals; RCR impact-factor dispersion check
