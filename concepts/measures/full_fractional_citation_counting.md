# Full versus fractional citation counting

## Summary

Full versus fractional citation counting compares two ways of assigning paper citation impact to authors: giving every author the full paper score, or dividing the paper score among contributors.

## Canonical Form

- Unit of analysis: author, paper, team, institution, country, field, or percentile group.
- Typical representation: paired full-count and fractional-count citation totals or shares.
- Measurement target: how collaboration size and credit allocation change measured impact concentration.
- Empirical signature: full-count indicators rise faster for authors in large teams, while fractional counts dampen mega-paper and large-collaboration effects.

## Uses in Science of Science

- Provides a counting-rule sensitivity layer for [citation elite concentration](citation_elite_concentration.md).
- Connects citation inequality to [team authorship share](team_authorship_share.md), [collective credit allocation](collective_credit_allocation.md), and [responsible metrics](responsible_metrics.md).
- Supplies the broader credit-allocation logic behind [coauthor-normalized h-index](coauthor_normalized_h_index.md) and [large-team h-index inflation](../validations/large_team_h_index_inflation.md).
- Helps evaluate whether a trend is driven by individual citation impact, collaboration growth, or author-credit inflation.
- Makes large-team fields comparable to smaller-team fields when measuring [attention inequality](../mechanisms/attention_inequality.md).
- Also matters for institutional and country-level citation indicators where full counting measures participation while fractional counting approximates contribution.

## Operationalization

- Compute a paper-level impact score, such as raw citations or [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md).
- Under full counting, assign the full paper score to each listed author.
- Under fractional counting, divide the paper score by the number of authors and assign the fraction to each author.
- Aggregate scores by author, institution, country, or percentile group, then compare concentration trends under both rules.
- Report whether multi-field records are also full counted or fractionally counted across fields.
- Distinguish author-level credit allocation from country, institution, or field-level counting rules, because the interpretation of full versus fractional counts changes with the unit.
- Use [mega-paper full-count inflation](../validations/mega_paper_full_count_inflation.md) when large collaborations may dominate the author-level tail.

## Evidence and Validations

- Verified full-text evidence from Nielsen and Andersen (2021) explicitly reports per-author cumulative citation impact under both full and fractional counting.
- In their author-level panel, the top 1 percent increased citation share from 14.1 percent to 21 percent in full counts and from 14.7 percent to 19.6 percent in fractional counts between 2000 and 2015 after excluding physics and astronomy from the detailed trend.
- The paper shows that a sharp post-2011 full-count rise is specific to physics and astronomy and likely tied to large-scale experiments and mega-papers with many coauthors.
- The full/fractional contrast therefore acts as a validation check for whether citation concentration reflects large collaboration structures rather than only individual-level impact.
- Verified full-text evidence from Waltman (2016) adds an evaluation interpretation: full counting can be read as participation in publications, while fractional counting can be read as contribution to publications.
- Waltman also warns that full counting is non-additive and can produce invalid field comparisons, even when field-normalized citation indicators are used.

## Caveats

- Equal fractional counting is simple but may misrepresent actual contribution.
- Full counting can overstate individual credit in large collaborations.
- Fractional counting can understate legitimate joint contribution when a paper is genuinely team-produced.
- Full counting can make aggregate country, institution, or field totals non-additive when internationally coauthored papers are counted once for each participating unit.

## Links

- [citation elite concentration](citation_elite_concentration.md)
- [normalized inflation-corrected citation score](normalized_inflation_corrected_citation_score.md)
- [citation elite productivity divergence](../mechanisms/citation_elite_productivity_divergence.md)
- [collective credit allocation](collective_credit_allocation.md)
- [co-citation credit attribution](../methods/co_citation_credit_attribution.md)
- [team authorship share](team_authorship_share.md)
- [wos subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [responsible metrics](responsible_metrics.md)
- [citation-indicator size dependence](citation_indicator_size_dependence.md)
- [publication citation unit choice](../methods/publication_citation_unit_choice.md)
- [mega-paper full-count inflation](../validations/mega_paper_full_count_inflation.md)
- [coauthor-normalized h-index](coauthor_normalized_h_index.md)
- [large-team h-index inflation](../validations/large_team_h_index_inflation.md)

## References

- Nielsen, M. W., & Andersen, J. P. (2021). Global citation inequality is on the rise. *Proceedings of the National Academy of Sciences*, 118(7), e2012208118. https://doi.org/10.1073/pnas.2012208118 [OpenAlex: W3128893582; Dimensions: pub.1135221443; WoS: unknown]
- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]

## Metadata

- Concept ID: `full_fractional_citation_counting`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Nielsen and Andersen (2021) (2021)
- Latest seen paper: Nielsen and Andersen (2021) (2021)
- Primary reference DOI: `10.1073/pnas.2012208118`
- OpenAlex ID: `W3128893582`
- Dimensions ID: `pub.1135221443`
- SciSciNet ID: `W3128893582`
- Aliases: full count citation credit; fractional citation credit; full versus fractional counts; author citation credit rule
