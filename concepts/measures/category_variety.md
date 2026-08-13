# Category variety

## Summary

Category variety measures how many distinct categories, fields, disciplines, topics, or options are represented in a portfolio or reference set.

## Canonical Form

- Unit of analysis: paper, reference list, portfolio, field, institution, funder, technology mix, or map overlay.
- Typical representation: count of nonzero categories or richness of invoked categories.
- Mechanism or measurement target: breadth of knowledge sources or option space.
- Empirical signature: variety increases when additional categories are represented, holding balance and disparity aside.

## Uses in Science of Science

- Provides the simplest component of [diversity measures](diversity_measures.md) and [interdisciplinarity dimensions](interdisciplinarity_dimensions.md).
- Helps separate broad category coverage from balanced allocation and distant knowledge integration.
- Supports portfolio audits, field-combination studies, reference-list analysis, and science-map overlays.

## Operationalization

- Assign items to a category system such as WoS subject categories, journal clusters, fields, topics, or technology classes.
- Count the number of categories with nonzero representation.
- Optionally log-transform or normalize by possible categories when category systems differ in size.
- Report alongside [distributional balance](distributional_balance.md) and [category disparity](category_disparity.md) when interpreting diversity.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) defines variety as the number of categories into which system elements are apportioned.
- Porter and Rafols (2009) operationalize variety in bibliometric interdisciplinarity through the number of cited Web of Science subject categories.
- Porter and Rafols also caution that cited-category variety can grow partly because reference lists get longer, motivating [reference-list length growth confound](../validations/reference_list_length_growth_confound.md).
- Wang, Thijs, and Glanzel (2015) use the number of referenced subject categories as a paper-level interdisciplinarity indicator and recover a factor corresponding to variety.
- Wang et al. also find that long-term citations increase with the extracted variety factor, while short-term citation windows can underestimate high-variety papers.
- Their nonlinear model finds increasing long-term citation returns to variety, while their window comparison shows a short-term citation penalty for the same dimension.

## Caveats

- Variety is sensitive to the granularity and quality of the category system.
- Counting categories ignores whether the categories are evenly represented or cognitively distant.
- Higher variety can reflect longer reference lists or broader indexing rather than substantive integration unless controlled.

## Links

- [diversity measures](diversity_measures.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [distributional balance](distributional_balance.md)
- [category disparity](category_disparity.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [field classifications](field_classifications.md)
- [science map overlays](../representations/science_map_overlays.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [cited subject-category reference profile](../representations/cited_subject_category_reference_profile.md)
- [reference-list length growth confound](../validations/reference_list_length_growth_confound.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `category_variety`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Aliases: category richness; number of cited disciplines; subject-category count; diversity variety
