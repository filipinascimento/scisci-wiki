# WoS 2001 interdisciplinarity article panel

## Summary

The WoS 2001 interdisciplinarity article panel is a paper-level Web of Science cohort used to study how reference-list interdisciplinarity relates to short-term citations, long-term citations, and citation delay.

## Canonical Form

- Unit of analysis: Web of Science journal article published in 2001.
- Typical representation: article metadata, reference-list subject-category profile, citation counts through fixed windows, and journal fixed-effect identifiers.
- Data target: long enough citation exposure to compare early and delayed impact for interdisciplinary papers.
- Empirical signature: a publication cohort with 3-year citations, 13-year citations, citation-delay scores, and measures of referenced disciplinary diversity.

## Uses in Science of Science

- Supplies the empirical base for separating [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md) into variety, balance, and disparity.
- Connects [Web of Science](web_of_science.md) source coverage to [cited subject-category reference profiles](../representations/cited_subject_category_reference_profile.md).
- Enables within-journal tests of [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md) and citation-window bias.
- Provides a reusable cohort design for linking reference diversity to later citation trajectories.

## Operationalization

- Select all journal articles published in 2001 in the Thomson Reuters Web of Science Core Collection, excluding reviews, letters, and other document types.
- Assign each focal article and its references to Web of Science subject categories.
- Compute article-level reference diversity indicators, including referenced subject-category count, other-discipline reference ratio, 1-Gini, Simpson, Shannon entropy, average dissimilarity, and Rao-Stirling diversity.
- Count short-term citations over 2001-2003 and long-term citations from 2001 through the end of 2013.
- Exclude papers with fewer than two referenced subject categories for measures that require pairwise category distances, while checking consistency on the larger sample where possible.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) analyzes 646,669 Web of Science articles from publication year 2001.
- The paper uses this single-year cohort because it gives a 13-year citation window while keeping publication year constant.
- Wang et al. construct interdisciplinarity indicators from the Web of Science subject categories referenced by each article.
- Their regressions use 646,223 papers for long-term citation models and 644,956 papers for short-term citation models after model-specific exclusions.

## Caveats

- The cohort is limited to Web of Science journal articles and inherits WoS coverage and subject-category assignment biases.
- A 2001 cohort supports long-window analysis but does not by itself represent later publication practices.
- Reference-list categories are output traces; they may miss knowledge integration that occurred during the research process but was not cited.

## Links

- [Web of Science](web_of_science.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [interdisciplinarity dimensions](../measures/interdisciplinarity_dimensions.md)
- [other-discipline reference ratio](../measures/other_discipline_reference_ratio.md)
- [category variety](../measures/category_variety.md)
- [distributional balance](../measures/distributional_balance.md)
- [category disparity](../measures/category_disparity.md)
- [interdisciplinarity factor decomposition](../methods/interdisciplinarity_factor_decomposition.md)
- [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `wos_2001_interdisciplinarity_article_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: 2001 WoS article panel; interdisciplinarity citation panel; WoS article-level IDR panel; 13-year interdisciplinary impact panel
