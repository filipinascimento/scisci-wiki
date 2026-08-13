# Career-trace vintage manifest

## Summary

Career-trace vintage manifest is the method motif that cross-domain career-history datasets should record source platform, extraction time, software, and access provenance because traces come from heterogeneous systems.

## Canonical Form

- Unit of analysis: career-history dataset, source platform, extraction event, software environment, or reproducibility manifest.
- Typical representation: source URL, census date, data vintage, access route, code version, or platform-specific provenance.
- Method target: make career-sequence analyses reproducible across art, film, science, and other creative domains.
- Empirical signature: the same study combines career traces from sources with different update cycles, coverage rules, and extraction tools.

## Uses in Science of Science

- Adds provenance infrastructure to [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md).
- Connects to [citation data census dates](citation_data_census_dates.md) and [scholarly snapshot versioning](scholarly_snapshot_versioning.md).
- Supports reproducible analysis of hot streaks, career entropy, and career-impact trajectories.

## Operationalization

- Record source platform, extraction date, access route, software version, and code/data release URL.
- Store career trace inclusion rules and minimum-observation filters alongside derived features.
- Version derived datasets when source platforms update or become unavailable.
- Report which parts of the pipeline are rerunnable from public data.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) reports distinct art, film, and science data sources and a reporting summary with data collection and software details.
- The hot-streak career traces combine Artprice/Findartinfo, IMDB, Google Scholar, Web of Science, and code/data release information.
- This motif turns those provenance fields into a reusable manifest pattern.

## Caveats

- Provenance metadata does not guarantee that proprietary or changing sources are fully reproducible.
- Some source platforms restrict redistribution.
- Software versions matter only if code and intermediate transformations are also documented.

## Links

- [cross-domain creative career histories](../datasets/cross_domain_creative_career_histories.md)
- [citation data census dates](citation_data_census_dates.md)
- [scholarly snapshot versioning](scholarly_snapshot_versioning.md)
- [research-ready table curation](research_ready_table_curation.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]

## Metadata

- Concept ID: `career_trace_vintage_manifest`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2018) (2018)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: career-data provenance manifest; creative-career source vintage; career-history extraction manifest
