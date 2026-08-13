# SciSciNet PMID intermediate-key bridge

## Summary

PMID acts as an intermediate bridge from MAG/SciSciNet papers to NIH and clinical-trial records.

## Canonical Form

- Unit of analysis: PaperID, PMID, NIH project number, NCT number, publication, grant, clinical trial, or biomedical linkage.
- Typical representation: PaperID-to-PMID crosswalk used to bridge external biomedical records.
- Mechanism, measurement, or validation target: identifier-mediated linking from publication backbone to NIH and trial tables.
- Empirical signature: NIH and clinical-trial links are recoverable for PaperIDs that can be mapped to PMIDs.

## Uses in Science of Science

- Refines SciSciNet linkage methods by linking it to [identifier bridge key crosswalks](../representations/identifier_bridge_key_crosswalks.md) and [clinical trial publication linkages](../datasets/clinical_trial_publication_linkages.md).
- Useful as a reusable check when [grant publication linkage tables](../datasets/grant_publication_linkage_tables.md) is used in science-of-science inference.
- Creates cross-links to [nih grant publication linkage cleaning](nih_grant_publication_linkage_cleaning.md) so the motif is not interpreted in isolation.

## Operationalization

- Build PaperID-to-PMID crosswalks from MAG extended attributes or equivalent source fields.
- Deduplicate many-to-one mappings before joining NIH Project Numbers or NCT Numbers through PMID.
- Report biomedical coverage bias and non-PubMed linkage gaps.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) uses MAG PaperExtendedAttributes to curate PMID links and then uses PMID as the bridge for NIH and clinical-trial linkages.
- The motif isolates the intermediate-key role of PMID in SciSciNet linkage construction.

## Caveats

- PMID-centered bridges bias coverage toward biomedical literature.
- They do not solve non-PubMed linkage gaps or recent-paper incompleteness in a static MAG base.

## Links

- [Identifier bridge-key crosswalks](../representations/identifier_bridge_key_crosswalks.md)
- [Clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [Grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [NIH grant-publication linkage cleaning](nih_grant_publication_linkage_cleaning.md)
- [Scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [SciSciNet-v2](../datasets/sciscinet_v2.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_pmid_intermediate_key_bridge`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: PMID bridge key; PaperID-PMID crosswalk; biomedical linkage bridge
