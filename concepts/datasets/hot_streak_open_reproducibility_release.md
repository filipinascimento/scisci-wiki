# Hot-streak open reproducibility release

## Summary

Hot-streak open reproducibility release is the dataset motif that code and derived data releases become part of the evidence chain for career-dynamics studies.

## Canonical Form

- Unit of analysis: code repository, derived dataset, release snapshot, reproduction package, or career-dynamics pipeline.
- Typical representation: data URL, code URL, release date, license, rerun status, or public artifact.
- Dataset target: separate the reusable evidence package from the underlying career-history sources.
- Empirical signature: a hot-streak study provides code and data artifacts that others can inspect or rerun, even when upstream sources are heterogeneous.

## Uses in Science of Science

- Complements [cross-domain creative career histories](cross_domain_creative_career_histories.md) by tracking the released analysis artifacts.
- Connects provenance to [career-trace vintage manifest](../methods/career_trace_vintage_manifest.md) and [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md).
- Supports reuse of hot-streak, entropy, and career-impact measures.

## Operationalization

- Record code URL, data URL, release snapshot, license, checksum, and rerun status.
- Distinguish raw source data, derived tables, model outputs, and plotting scripts.
- Track whether public artifacts can reproduce key tables and figures.
- Revalidate links and checksums when the knowledge base is refreshed.

## Evidence and Validations

- Verified full-text evidence from Liu et al. (2018) provides code and data availability for the original hot-streak analyses.
- Verified full-text evidence from Liu et al. (2021) reports deposited data and code for the exploration-exploitation onset study.
- This motif treats release artifacts as reusable datasets in their own right.

## Caveats

- Public URLs can drift or disappear.
- Code release does not guarantee that proprietary upstream sources can be reconstructed.
- Reproduction may depend on software versions and undocumented environment details.

## Links

- [cross-domain creative career histories](cross_domain_creative_career_histories.md)
- [career-trace vintage manifest](../methods/career_trace_vintage_manifest.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [research-ready table curation](../methods/research_ready_table_curation.md)

## References

- Liu, L., Wang, Y., Sinatra, R., Giles, C. L., Song, C., & Wang, D. (2018). Hot streaks in artistic, cultural, and scientific careers. *Nature*, 559, 396-399. https://doi.org/10.1038/s41586-018-0315-8 [OpenAlex: W2808505390; Dimensions: pub.1105449529; WoS: unknown]
- Liu, L., Dehmamy, N., Chown, J., Giles, C. L., & Wang, D. (2021). Understanding the onset of hot streaks across artistic, cultural, and scientific careers. *Nature Communications*, 12, 5392. https://doi.org/10.1038/s41467-021-25477-8 [OpenAlex: W3201257425; Dimensions: pub.1141075911; WoS: unknown]

## Metadata

- Concept ID: `hot_streak_open_reproducibility_release`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Liu et al. (2018) (2018)
- Latest seen paper: Liu et al. (2021) (2021)
- Primary reference DOI: `10.1038/s41586-018-0315-8`
- OpenAlex ID: `W2808505390`
- Dimensions ID: `pub.1105449529`
- SciSciNet ID: `W2808505390`
- Aliases: hot-streak code-data release; career-dynamics reproduction package; hot-streak reproducibility artifacts
