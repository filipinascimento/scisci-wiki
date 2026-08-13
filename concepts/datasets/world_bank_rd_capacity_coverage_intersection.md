# World Bank R&D capacity coverage intersection

## Summary

World Bank R&D capacity coverage intersection is the dataset motif that national research-capacity analyses depend on the country-year overlap between R&D expenditure and researcher-count coverage.

## Canonical Form

- Unit of analysis: country, year, R&D expenditure, researcher count, complete-case subset, or coverage flag.
- Typical representation: PPP R&D spending, researchers per country, expenditure-only countries, researcher-only countries, or complete intersection.
- Dataset target: make national-capacity missingness visible before modeling funding and impact relationships.
- Empirical signature: fewer countries have both expenditure and researcher-count data than have either source alone.

## Uses in Science of Science

- Adds data-coverage scope to [national research output-funding scaling](../measures/national_research_output_funding_scaling.md).
- Supports interpretation of [R&D spending per researcher threshold](../measures/rd_spending_per_researcher_threshold.md).
- Connects national funding measures to [Web of Science](web_of_science.md)-based research output data.

## Operationalization

- Build country-year tables with expenditure availability, researcher-count availability, and complete-case flags.
- Report coverage counts before and after intersections.
- Test complete-case sensitivity and missingness patterns by region and income level.
- Preserve units, PPP conversion, and source-year metadata.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) reports World Bank R&D expenditure coverage for 102 countries, researcher-count coverage for 89 countries, and both sources for 77 countries.
- The complete-case intersection underlies the per-researcher funding threshold analysis.

## Caveats

- Missingness is likely nonrandom across country income, research capacity, and statistical systems.
- Country-year alignment can be imperfect.
- National averages can hide institutional and field heterogeneity.

## Links

- [national research output-funding scaling](../measures/national_research_output_funding_scaling.md)
- [R&D spending per researcher threshold](../measures/rd_spending_per_researcher_threshold.md)
- [Web of Science](web_of_science.md)
- [wos geocoded science corpus](wos_geocoded_science_corpus.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `world_bank_rd_capacity_coverage_intersection`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: R&D capacity complete-case table; World Bank researcher expenditure intersection; national research-capacity coverage flags
