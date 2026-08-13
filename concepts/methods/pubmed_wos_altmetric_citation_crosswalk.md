# PubMed-WoS altmetric citation crosswalk

## Summary

PubMed-WoS altmetric citation crosswalk is the method motif that links PubMed-indexed altmetric-positive records to Web of Science citation outcomes through bibliographic matching.

## Canonical Form

- Unit of analysis: article, PMID, DOI, altmetric provider record, WoS record, citation count, or match route.
- Typical representation: PMID-WoS match, DOI crosswalk, provider record join, citation census date, or match-yield report.
- Method target: combine biomedical article identifiers, altmetric source counts, and citation outcomes.
- Empirical signature: PubMed records with altmetric mentions are matched to Web of Science citation records for association tests.

## Uses in Science of Science

- Adds an identifier workflow to [scholarly identifier spine](../representations/scholarly_identifier_spine.md).
- Uses [PubMed ID time proxy](pubmed_id_time_proxy.md) while grounding citation outcomes in [Web of Science](../datasets/web_of_science.md).
- Supports source-specific [altmetric citation association](../validations/altmetric_citation_association.md) tests.

## Operationalization

- Preserve PMID, DOI, altmetric provider identifier, WoS accession or matched record, and citation census date.
- Report match yield and unmatched cases.
- State whether self-citations are included or excluded.
- Audit time-window differences between PubMed indexing, online publication, altmetric collection, and WoS citation counts.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) links PubMed documents with at least one altmetric mention to Web of Science citation data for source-specific comparisons.
- The study uses bibliographic matching and PubMed-based timing to control citation and attention windows.

## Caveats

- Web of Science coverage and citation windows shape observed associations.
- PubMed coverage limits generalization beyond biomedical and life-science articles.
- DOI and PMID metadata can be incomplete or inconsistent.

## Links

- [Web of Science](../datasets/web_of_science.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [PubMed ID time proxy](pubmed_id_time_proxy.md)
- [altmetric attention timing windows](altmetric_attention_timing_windows.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `pubmed_wos_altmetric_citation_crosswalk`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: PubMed WoS altmetric join; PMID citation crosswalk; biomedical altmetric-citation matching
