# Citation breadth via distinct cited sources

## Summary

Citation breadth via distinct cited sources counts how many unique articles or journals receive citations from a focal journal, subfield, or citation window.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, field-year, paper set, citation window, or source collection.
- Typical representation: number of distinct cited articles, number of distinct cited journals, breadth count, or log/count model outcome.
- Measurement target: breadth of explicit prior-work use in a citation population.
- Empirical signature: fewer distinct cited sources indicate a narrower reference base, especially when total output and reference counts are growing.

## Uses in Science of Science

- Provides a count-based operationalization of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Complements [cited work diversity](cited_work_diversity.md), which weights balance or category spread rather than only distinct source counts.
- Links online discovery systems to [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md) and [online backfile depth](online_backfile_depth.md).
- Helps separate citation breadth from [citation concentration Herfindahl](citation_concentration_herfindahl.md): a field can cite few sources evenly or many sources very unevenly.
- Uses [overdispersed citation-breadth count models](../methods/overdispersed_citation_breadth_count_model.md) when distinct-source counts are highly skewed.
- Can be computed over [citation networks](../representations/citation_networks.md), journal citation profiles, or paper-reference tables.

## Operationalization

- Define a focal population such as all citations made by a journal in year t or by a subfield in year t.
- Choose a citation window, such as references to the previous 20 years, and count unique cited articles or journals inside it.
- Normalize or model against citation year, number of citing articles, pages, reference counts, field, and database coverage.
- Use count models, distinct-count scaling, or field-year fixed effects when comparing across sources with different sizes.
- Pair with concentration and diversity measures to distinguish variety, balance, and source-category spread.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) measures the distinct number of articles and journals cited in a given citation year by depth of online availability.
- Evans computes distinct cited articles and journals over a 20-year window and estimates fixed-effect negative binomial models because the outcome is discrete and concentrated in core journals.
- The paper reports that, with five additional years of free and commercial online availability, distinct articles cited within a hypothetical journal drop from about 600 to about 200.
- Evans also reports that distinct articles cited within subfields drop from about 25,000 to 15,000 and distinct journals from 19 to 16 under the same illustrative change.
- Provision of one additional year of issues online for free is associated with 14 percent fewer distinct articles cited.

## Caveats

- Distinct counts increase mechanically with publication volume and reference-list length unless denominators are modeled.
- A larger count does not prove substantive intellectual breadth if many references are perfunctory.
- Source disambiguation, journal title changes, and database coverage affect the count.

## Links

- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [online backfile depth](online_backfile_depth.md)
- [citation concentration Herfindahl](citation_concentration_herfindahl.md)
- [overdispersed citation-breadth count model](../methods/overdispersed_citation_breadth_count_model.md)
- [expanding citation-window sweep](../methods/expanding_citation_window_sweep.md)
- [cited work diversity](cited_work_diversity.md)
- [reference set construction](../methods/reference_set_construction.md)
- [citation networks](../representations/citation_networks.md)
- [Web of Science](../datasets/web_of_science.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `citation_breadth_distinct_sources`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: distinct cited articles; distinct cited journals; cited-source breadth; reference breadth count
